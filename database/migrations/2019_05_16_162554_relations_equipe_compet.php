<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RelationsEquipeCompet extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipe_competitions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('equipe_id')->index();
            $table->foreign('equipe_id')->references('id')->on('equipes')->onDelete('cascade');
            $table->unsignedBigInteger('competition_id')->index();
            $table->foreign('competition_id')->references('id')->on('competitions')->onDelete('cascade');
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
        //
    }
}
