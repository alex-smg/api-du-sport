<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Competition extends Model
{
    public function equipe_competition()
    {
        return $this->hasMany('App\EquipeCompetition');
    }
}
