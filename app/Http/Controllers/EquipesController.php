<?php

    namespace App\Http\Controllers;

    use App\Equipe;
    use Illuminate\Http\Request;
    use App\Http\Resources\Equipe as EquipeResource;


    class EquipesController extends Controller
    {
        public function index()
        {
            $allequipes = Equipe::orderBy('name', 'DESC')->paginate(10);
            return EquipeResource::collection($allequipes);
        }
        public function findEquipe($id){
            $equipe = Equipe::findOrFail($id);
            return new EquipeResource($equipe);
        }
        public function store(Request $request)
        {
            $equipe = $request->isMethod('put') ? Article::findOrFail($request->id) : new Equipe;
            $equipe->id = $request->input('id');
            $equipe->name = $request->input('name');
            $equipe->description = $request->input('description');
            $equipe->athlete_id = $request->input('athlete_id');
            if($equipe->save()) {
                return new EquipeResource($equipe);
            }

        }
        public function destroy($id){
            $equipe = Equipe::findOrFail($id);
            if($equipe->delete()) {
                return new EquipeResource($equipe);
            }
        }

    }
