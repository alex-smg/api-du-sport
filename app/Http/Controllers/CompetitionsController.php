<?php

namespace App\Http\Controllers;

use App\Competition;
use Illuminate\Http\Request;
use App\Http\Resources\Competition as CompetitionResource;

class CompetitionsController extends Controller
{
    public function index()
    {
        $allcompetitions = Competition::orderBy('name', 'DESC')->paginate(10);
        return CompetitionResource::collection($allcompetitions);
    }
    public function findCompetiton($id){
        $competition = Competition::findOrFail($id);
        return new CompetitionResource($competition);
    }
    public function store(Request $request)
    {
        $exploded = explode(',', $request->image);
        $decoded = base64_decode($exploded[1]);
        if(str_contains($exploded[0], 'jpeg'))
            $extension = 'jpg';
        else
            $extension = 'png';
        $fileName = str_random().'.'.$extension;
        $path = public_path().'/img/'.$fileName;
        file_put_contents($path, $decoded);

        $competition = $request->isMethod('put') ? Competition::findOrFail($request->id) : new Competition;
        $competition->id = $request->input('id');
        $competition->name = $request->input('name');
        $competition->image = $fileName;
        $competition->description = $request->input('description');

        if($competition->save()) {
            return new CompetitionResource($competition);
        }

    }

    public function destroy($id){
        $competition = Competition::findOrFail($id);
        if($competition->delete()) {
            return new CompetitionResource($competition);
        }
    }
}
