<?php

    namespace App\Http\Controllers;

    use App\Nationalite;
    use Illuminate\Http\Request;
    use App\Http\Resources\Nationalite as NationaliteResource;


    class NationalitesController extends Controller
    {
        public function index()
        {
            $allnationalite = Nationalite::orderBy('name', 'DESC')->paginate(10);
            return NationaliteResource::collection($allnationalite);
        }
        public function findEquipe($id){
            $nationalite = Nationalite::findOrFail($id);
            return new NationaliteResource($nationalite);
        }
        public function store(Request $request)
        {
            $equipe = $request->isMethod('put') ? Equipe::findOrFail($request->id) : new Equipe;
            $equipe->id = $request->input('id');
            $equipe->name = $request->input('name');
            $equipe->description = $request->input('description');
            $equipe->nationalite_id = $request->input('nationalite_id');
            if($equipe->save()) {
                return new EquipeResource($equipe);
            }

        }

        /*public function update(Request $request, $id)
        {
            $equipe = Equipe::find($id);
            $equipe->name = $request->get('name');
            $equipe->description = $request->get('description');
            $equipe->nationalite_id = $request->get('nationalite_id');
            $equipe->save();

            return $equipe;
        }*/
        public function destroy($id){
            $equipe = Equipe::findOrFail($id);
            if($equipe->delete()) {
                return new EquipeResource($equipe);
            }
        }

    }
