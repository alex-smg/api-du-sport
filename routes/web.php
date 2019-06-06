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


Auth::routes();

    Route::get('/', function () {
        return redirect('/home');
    })->middleware('auth');

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/contacts', 'ContactsController@get');
Route::get('/auth', 'ContactsController@getauth');
Route::post('/conversation/send', 'ContactsController@send');
Route::get('/conversation/{id}', 'ContactsController@getMessagesFor');

