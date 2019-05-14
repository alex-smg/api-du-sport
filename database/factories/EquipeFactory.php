<?php

    /** @var \Illuminate\Database\Eloquent\Factory $factory */
    use App\Equipe;
    use Illuminate\Support\Str;
    use Faker\Generator as Faker;

    /*
    |--------------------------------------------------------------------------
    | Model Factories
    |--------------------------------------------------------------------------
    |
    | This directory should contain each of the model factory definitions for
    | your application. Factories provide a convenient way to generate new
    | model instances for testing / seeding your application's database.
    |
    */

    $factory->define(Equipe::class, function (Faker $faker) {
        return [
            'name' => $faker->name,
            'description' => $faker->realText(180),
            'competition' => $faker->randomElement(['1', '10']),
            'nationalite_id' => $faker->randomElement(['1', '10']),

        ];
    });
