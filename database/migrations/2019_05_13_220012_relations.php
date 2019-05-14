<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Relations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('athletes', function (Blueprint $table) {
            $table->unsignedBigInteger('equipe_id')->index();
            $table->foreign('equipe_id')->references('id')->on('equipes')->onDelete('cascade');
        });
        Schema::table('equipes', function (Blueprint $table) {
            $table->unsignedBigInteger('nationalite_id')->index();
            $table->foreign('nationalite_id')->references('id')->on('nationalites')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
