<?php

namespace App\Http\Controllers;

use App\Athlete;
use Illuminate\Http\Request;
use App\Http\Resources\Athlete as AthleteResource;


class AthletesController extends Controller
{
    public function index()
    {
        $allAthletes = Athlete::orderBy('name', 'DESC')->paginate(10);
        return AthleteResource::collection($allAthletes);
    }
    public function findAthlete($id){
        $athlete = Athlete::with('equipe')->findOrFail($id);
        return $athlete;
    }
    public function store(Request $request)
    {
        $athlete = $request->isMethod('put') ? Article::findOrFail($request->id) : new Athlete;
        $athlete->id = $request->input('id');
        $athlete->name = $request->input('name');
        $athlete->description = $request->input('description');
        $athlete->equipe_id = $request->input('equipe_id');
        if($athlete->save()) {
            return new AthleteResource($athlete);
        }

    }
    public function edit($id)
    {
        $upAthlete = Athlete::find($id);
        return $upAthlete;
    }
    public function update(Request $request, $id)
    {
        $athlete = Athlete::find($id);
        $athlete->name = $request->get('name');
        $athlete->description = $request->get('description');
        $athlete->equipe_id = $request->get('equipe_id');
        $athlete->save();

        return $athlete;
    }

    public function destroy($id){
        $athlete = Athlete::findOrFail($id);
        if($athlete->delete()) {
            return new AthleteResource($athlete);
        }
    }

}
