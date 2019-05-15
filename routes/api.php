<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('allathletes', 'AthletesController@index');

Route::get('allathletes/{id}', 'AthletesController@findAthlete');

Route::post('add/athlete', 'AthletesController@store');

Route::delete('athletes/{id}', 'AthletesController@destroy');

Route::get('all_equipes', 'EquipesController@index');

Route::get('equipe/{id}', 'EquipesController@findEquipe');

Route::post('add/equipe', 'EquipesController@store');

Route::delete('equipe/{id}', 'EquipesController@destroy');
