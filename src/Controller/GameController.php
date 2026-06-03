<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Game;
use App\Form\FactionChoiceType;
use App\Form\FactionGameChoiceType;
use App\Repository\BuildingRepository;
use App\Repository\BuildingTypeRepository;
use App\Repository\GameRepository;
use App\Service\PlayerInventoryInitializer;
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
    public function index(BuildingRepository $buildingRepo, BuildingTypeRepository $btRepo): Response
    {
        $user = $this->getUser();

        if ($user instanceof User && $user->getFaction() === null) {
            return $this->redirectToRoute('game_choose_faction');
        }

        $hasBase = $buildingRepo->findBaseForUser($user) !== null;

        return $this->render('game/index.html.twig', [
            'buildingTypes' => $btRepo->findAll(),
            'hasBase' => $hasBase
        ]);
    }

    #[Route('/game/choose-faction', name: 'game_choose_faction')]
    public function chooseFaction(
        Request $request,
        EntityManagerInterface $entityManager,
        PlayerInventoryInitializer $inventoryInitializer,
        GameRepository $gameRepository
    ): Response {
        $user = $this->getUser();

        if (!$user instanceof User) {
            return $this->redirectToRoute('app_login');
        }

        if ($user->getFaction() !== null && $user->getGame() !== null) {
            return $this->redirectToRoute('game');
        }

        // Si l'utilisateur a déjà une faction, on l'utilise comme valeur par défaut
        $form = $this->createForm(FactionGameChoiceType::class, [], [
            'faction_data' => $user->getFaction(),
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $selectedGame = $form->get('game')->getData();
            $selectedFaction = $form->get('faction')->getData();

            // Assigner le joueur à la partie et à la faction
            $user->setGame($selectedGame);
            $user->setFaction($selectedFaction);
            $entityManager->persist($user);
            $entityManager->flush();

            // Initialiser les inventaires du joueur
            $inventoryInitializer->initializePlayerInventories($user);

            return $this->redirectToRoute('game');
        }

        // Récupérer les parties actives
        $activeGames = $gameRepository->findBy(['is_active' => true]);

        return $this->render('game/choose_faction.html.twig', [
            'form' => $form->createView(),
            'activeGames' => $activeGames,
        ]);
    }
}