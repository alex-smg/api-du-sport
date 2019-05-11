<?php

namespace App\Http\Controllers;

use App\Athlete;
use Illuminate\Http\Request;


class AthletesController extends Controller
{
    public function index()
    {
        return Athlete::all();
    }
}
