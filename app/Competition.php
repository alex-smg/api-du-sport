<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Competition extends Model
{
    public function equipes()
    {
        return $this->belongsToMany('App\Equipe');
    }
}
