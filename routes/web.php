<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('phoneBook');
});


//this to help the proplem when refresh on vue page it return error so user this route to redirect to the main page

Route::get('/{name}',function(){
    return redirect('/');
})->where('name','[A-Za-z]+');