<?php

    namespace Tests\Unit;

    use App\Http\Controllers\AthletesController;
    use Tests\TestCase;
    use Illuminate\Foundation\Testing\RefreshDatabase;

    class AthleteUnitTest extends TestCase
    {
        /**
         * A basic test example.
         *
         * @return void
         */
        public function testFindMethodTest()
        {
            $athlete = new AthletesController;
            $athlete->findAthlete(15);
            $this->assertTrue(true);
        }
    }
