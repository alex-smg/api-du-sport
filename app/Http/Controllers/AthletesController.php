<?php

namespace App\Http\Controllers;

use App\Athlete;
use Illuminate\Http\Request;
use App\Http\Resources\Athlete as AthleteResource;


class AthletesController extends Controller
{
    public function index()
    {
        $allAthletes = Athlete::orderBy('name', 'DESC')->paginate(5);
        return AthleteResource::collection($allAthletes);
    }
    public function findAthlete($id){
        $athlete = Athlete::findOrFail($id);
        return new AthleteResource($athlete);
    }
    public function destroy($id){
        $athlete = Athlete::findOrFail($id);
        if($athlete->delete()) {
            return new AthleteResource($athlete);
        }
    }

}
