<?php

namespace App\Http\Controllers;

use App\Athlete;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
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
        $athlete = $request->isMethod('put') ? Athlete::findOrFail($request->id) : new Athlete;
        $athlete->id = $request->input('id');
        $athlete->name = $request->input('name');
        $athlete->description = $request->input('description');
        $athlete->equipe_id = $request->input('equipe_id');
        $athlete->image = $request->input('image');
        if($athlete->save()) {
            return new AthleteResource($athlete);
        }

    }
    public function callApi(){
        $client = new Client(['base_uri' => 'https://api.unsplash.com/']);
        $response = $client->request('GET', '/photos/random?client_id=4e3545c359e7e4e3722d48ba267a8cb1ec3bcbc0850788677e83b91d64dfb1f3');
        $decode = json_decode($response->getBody(), true);
        $final = $decode['urls']['regular'];
       return $final;
    }
    public function destroy($id){
        $athlete = Athlete::findOrFail($id);
        if($athlete->delete()) {
            return new AthleteResource($athlete);
        }
    }

}
