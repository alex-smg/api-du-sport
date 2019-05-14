<?php

    namespace App\Http\Controllers;

    use App\Athlete;
    use Illuminate\Http\Request;
    use App\Http\Resources\Athlete as AthleteResource;


    class EquipesController extends Controller
    {
        public function index()
        {
            $allAthletes = Athlete::orderBy('name', 'DESC')->paginate(5);
            return AthleteResource::collection($allAthletes) ;
        }
    }
