<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Athlete extends Model
{
    public function equipe()
    {
        return $this->belongsTo('App\Equipe');
    }
}
