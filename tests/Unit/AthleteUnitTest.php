<?php

    namespace Tests\Unit;

    use App\Athlete;
    use Tests\TestCase;
    use Illuminate\Foundation\Testing\RefreshDatabase;

    class AthleteUnitTest extends TestCase
    {
        /**
         * A basic test example.
         *
         * @return void
         */
        public function testAthleteCreation()
        {
            $athlete = factory(Athlete::class)->create();
            $this->assertDatabaseHas('athletes', [
                'id' => $athlete->id,
                'name' => $athlete->title,
                'description' => $athlete->description,
                'equipe_id'=>$athlete->equipe_id
            ]);
        }
    }

