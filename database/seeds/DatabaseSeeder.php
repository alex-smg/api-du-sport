<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       factory(\App\Nationalite::class, 10)->create();
        factory(\App\Competition::class, 15)->create();
        factory(\App\Equipe::class, 10)->create();
        factory(\App\Athlete::class, 150)->create();
        factory(\App\Equipe_competition::class, 15)->create();
         factory(\App\User::class, 15)->create();
        factory(\App\Message::class, 150)->create();

    }
}
