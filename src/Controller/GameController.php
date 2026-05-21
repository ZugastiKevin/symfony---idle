<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\FactionChoiceType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
final class GameController extends AbstractController
{
    #[Route('/game', name: 'game')]
    public function index(): Response
    {
        $user = $this->getUser();

        if ($user instanceof User && $user->getFaction() === null) {
            return $this->redirectToRoute('game_choose_faction');
        }

        return $this->render('game/index.html.twig');
    }

    #[Route('/game/choose-faction', name: 'game_choose_faction')]
    public function chooseFaction(Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();

        if (!$user instanceof User) {
            return $this->redirectToRoute('app_login');
        }

        if ($user->getFaction() !== null) {
            return $this->redirectToRoute('game');
        }

        $form = $this->createForm(FactionChoiceType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $selectedFaction = $form->get('factions')->getData();
            $user->setFaction($selectedFaction);
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('game');
        }

        return $this->render('game/choose_faction.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}