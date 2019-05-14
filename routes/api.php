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

Route::get('athletes', 'AthletesController@index');

Route::delete('athletes/{id}', 'AthletesController@destroy');
