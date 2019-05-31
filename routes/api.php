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

Route::get('all-nationalites', 'NationalitesController@index');

Route::get('all-equipes', 'EquipesController@index');

Route::get('all-competitions', 'CompetitionsController@index');

Route::get('athlete/{id}', 'AthletesController@findAthlete');

Route::get('equipe/{id}', 'EquipesController@findEquipe');

Route::get('competition/{id}', 'CompetitionsController@findCompetiton');

Route::get('add/athlete/image', 'AthletesController@callApi');

Route::get('/quotesoftheday', 'ChuckNorrisController@index');

Route::get('athletes-of-equipe/{id}', 'EquipesController@EquipeAthletes');

Route::post('add/athlete', 'AthletesController@store');

Route::post('add/equipe', 'EquipesController@store');

Route::post('add/competition', 'CompetitionsController@store');

Route::put('update/athlete/{id}', 'AthletesController@store');

Route::put('update/equipe/{id}', 'EquipesController@store');

Route::put('update/competition/{id}', 'CompetitionsController@store');

Route::delete('equipe/delete/{id}', 'EquipesController@destroy');

Route::delete('athlete/delete/{id}', 'AthletesController@destroy');

Route::delete('competition/delete/{id}', 'CompetitionsController@destroy');

