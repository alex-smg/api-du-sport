<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipe extends Model
{
    public function athletes()
    {
        return $this->hasMany('App\Athlete');
    }
    public function competitions()
    {
        return $this->belongsToMany('App\Competition');
    }
    public function nationalites()
    {
        return $this->hasOne('App\Nationalite');
    }
}
