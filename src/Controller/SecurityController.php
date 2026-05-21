<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
     // create or update user
    #[Route('/update_user/{id}', name: 'update_user')]
    #[Route('/create_user', name: 'create_user')]
    public function createUser(?User $user, Request $request, UserRepository $repository, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordEncoder): Response
    {
        $currentUser = $this->getUser();

        if ($user && $user->getId() !== null) {
            if (!$currentUser) {
                return $this->redirectToRoute('app_login');
            }

            if ($user !== $currentUser) {
                return $this->redirectToRoute('home');
            }
        } else {
            $user = new User();

            if ($currentUser) {
                return $this->redirectToRoute('home');
            }
        }

        $form = $this->createForm(UserType::class, $user, [
            'is_edit' => $user->getId() !== null,
        ]);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $plainPassword = $form->get('plainPassword')->getData();
            if (!$user->getId()) {
                $exist = $repository->findOneBy(['email' => $user->getEmail()]);
                if ($exist) {
                    $this->addFlash('error','account_email_exists');
                    return $this->redirectToRoute('create_user');
                }

                $user->setRoles(['ROLE_USER']);
                $user->setCreatedAt(new \DateTimeImmutable());
            }

            if ($plainPassword) {
                $user->setPassword(
                    $passwordEncoder->hashPassword($user, $plainPassword)
                );
            }

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('home');
        }

        return $this->render('security/createUpdateUser.html.twig', [
            'userCreateForm' => $form->createView(),
            'userUpdateForm' => $user->getId() !== null,
        ]);
    }

    // login
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    //logout
    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
