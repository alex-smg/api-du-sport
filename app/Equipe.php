<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipe extends Model
{
    public function athletes()
    {
        return $this->hasMany('App\Athlete');
    }
    public function equipe_competition()
    {
        return $this->hasMany('App\EquipeCompetition');
    }
    public function nationalites()
    {
        return $this->hasOne('App\Nationalite');
    }
}
