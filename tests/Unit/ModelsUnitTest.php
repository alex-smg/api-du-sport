<?php

    namespace Tests\Unit;

    use App\Athlete;
    use App\Competition;
    use App\Equipe;
    use App\User;
    use Tests\TestCase;
    use Illuminate\Foundation\Testing\RefreshDatabase;

    class ModelsUnitTest extends TestCase
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
                'name' => $athlete->name,
                'description' => $athlete->description,
                'equipe_id'=>$athlete->equipe_id
            ]);
        }
        /**
         * A basic test example.
         *
         * @return void
         */
        public function testEquipeCreation()
        {
            $equipe = factory(Equipe::class)->create();
            $this->assertDatabaseHas('equipes', [
                'id' => $equipe->id,
                'name' => $equipe->name,
                'description' => $equipe->description,
                'nationalite_id'=>$equipe->nationalite_id
            ]);
        }
        /**
         * A basic test example.
         *
         * @return void
         */
        public function testCompetitionCreation()
        {
            $competition = factory(Competition::class)->create();
            $this->assertDatabaseHas('competitions', [
                'id' => $competition->id,
                'name' => $competition->name,
                'description' => $competition->description,
            ]);
        }
        /**
         * A basic test example.
         *
         * @return void
         */
        public function testUserCreation()
        {
            $user = factory(User::class)->create();
            $this->assertDatabaseHas('users', [
                'id' => $user->id,
                'name' => $user->name,
                'phone' => $user->phone,
                'profile_image' => $user->profile_image,
                'email' => $user->email,
                'password' => $user->password,
            ]);
        }
    }

