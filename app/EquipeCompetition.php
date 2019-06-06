<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EquipeCompetition extends Model
{
    public function equipes()
    {
        return $this->belongsToMany('App\Equipe');
    }
    public function competitions()
    {
        return $this->belongsToMany('App\Competition');
    }
}
