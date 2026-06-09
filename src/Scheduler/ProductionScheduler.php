<?php

namespace App\Scheduler;

use App\Message\ProcessProductionMessage;
use Symfony\Component\Scheduler\Attribute\AsSchedule;
use Symfony\Component\Scheduler\RecurringMessage;
use Symfony\Component\Scheduler\Schedule;
use Symfony\Component\Scheduler\ScheduleProviderInterface;
use Symfony\Contracts\Cache\CacheInterface;

#[AsSchedule('default')]
class ProductionScheduler implements ScheduleProviderInterface
{
    public function __construct(
        private readonly CacheInterface $cache,
    ) {}

    public function getSchedule(): Schedule
    {
        return (new Schedule())
            ->add(
                // Toutes les heures
                RecurringMessage::every('1 hour', new ProcessProductionMessage())
            )
            ->stateful($this->cache); // garde l'état entre les restarts
    }
}