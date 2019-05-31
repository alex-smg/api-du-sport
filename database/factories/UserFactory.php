<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(App\User::class, function (Faker $faker) {
    return [

        'name'=> $faker->name,
        'phone'=> $faker->phoneNumber,
        'profile_image'=> 'http://via.placeholder.com/150x150',
        'email'=>$faker->unique()->safeEmail,
        'password' => bcrypt('admin'),

    ];
});

