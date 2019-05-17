<?php

Route::get('athletes', function (){
    return view('athlete.allathlete');
});
Route::post('athletes', function (){
    return view('athlete.allathlete');
});

Route::get('/', function () {
    return view('welcome');
});

