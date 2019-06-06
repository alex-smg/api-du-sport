<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Athlete;
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

$factory->define(Athlete::class, function (Faker $faker) {

    return [
        'name' => $faker->name,
        'description' => $faker->realText(180),
        'equipe_id' => $faker->numberBetween($min = 1, $max = 10),
        'image' => $faker->randomElement(['https://resize-public.ladmedia.fr/r/641,/img/var/public/storage/images/news/etes-vous-un-beauf-faites-le-test-1475177/38632802-1-fre-FR/Etes-vous-un-beauf-Faites-le-test.jpg', 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit/v1533041057/y06x9ymcy7fpbna4j8jn.jpg', 'https://pbs.twimg.com/profile_images/616547145336909825/RBkYURJ9_400x400.jpg', 'https://medias.spotern.com/spots/w1280/9910-1532336916.jpg', 'https://img-4.linternaute.com/aylhTuCozun7_fXl9D1RItm1T3U=/300x/smart/10726222818645f3acdccca617302124/ccmcms-linternaute/621087.jpg'])

    ];
});
