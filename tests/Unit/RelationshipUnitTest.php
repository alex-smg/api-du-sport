<?php

namespace Tests\Unit;

use App\Athlete;
use App\Equipe;
use App\Nationalite;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;


class RelationshipUnitTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
        public function testAthleteEquipeRelationship()
    {
        $equipe = factory(Equipe::class)->create();
        $athlete = factory(Athlete::class)->create();
        $athlete->equipe()->associate($equipe);
        $athlete->save();
        $this->assertDatabaseHas('athletes', [
            'id' => $athlete->id,
            'equipe_id' => $equipe->id
        ]);
    }
    /**
     * A basic test example.
     *
     * @return void
     */
        public function testEquipeNationaliteRelationship()
    {
        $equipe = factory(Equipe::class)->create();
        $nationalite = factory(Nationalite::class)->create();
        $equipe->nationalites()->associate($nationalite);
        $equipe->save();
        $this->assertDatabaseHas('equipes', [
            'id' => $equipe->id,
            'nationalite_id' => $nationalite->id
        ]);
    }
}
