<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipe extends Model
{
    public function athletes()
    {
        return $this->hasMany('App\Athlete');
    }
}
