<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAthleteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->longText('description');
           $table->timestamps();
        });

        Schema::create('athletes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->longText('description');
            $table->timestamps();
        });
        Schema::create('nationalites', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('drapeau')->nullable();
            $table->longText('description');
            $table->timestamps();
        });
        Schema::create('competitions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('image')->nullable();
            $table->longText('description');
            $table->timestamps();
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('athletes');
        Schema::dropIfExists('equipes');
        Schema::dropIfExists('competitions');
        Schema::dropIfExists('nationalites');
    }
}
