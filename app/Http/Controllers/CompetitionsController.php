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
        $competition = $request->isMethod('put') ? Competition::findOrFail($request->id) : new Competition;
        $competition->id = $request->input('id');
        $competition->name = $request->input('name');
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
