<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Nationalite extends Model
{
    public function equipes()
    {
        return $this->hasOne('App\Equipe');
    }
}
