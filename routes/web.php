<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('athletes', function (){
    return view('athlete.allathlete');
});
Route::post('athletes', function (){
    return view('athlete.allathlete');
});

Route::get('/', function () {
    return view('welcome');
});

