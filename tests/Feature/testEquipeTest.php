<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class testEquipeTest extends TestCase
{
    /**
     * @test
     * A basic feature test example.
     *
     * @return void
     */
    public function allEquipesTest()
    {
        $response = $this->get('api/all-equipes');

        $response->assertStatus(200);
    }

    /**
     * @test
     * A basic feature test example.
     *
     * @return void
     */
    public function findEquipeTest()
    {
        $response = $this->get('api/equipe/15');

        $response->assertStatus(200);
    }
    /**
     * @test
     * A basic feature test example.
     *
     * @return void
     */
    public function postEquipeTest()
    {
        $data = [
            'id'=> 500,
            'name' => "test",
            'description' => "This is a test",
            'nationalite_id' => 5,

        ];

        $response = $this->json('POST', 'api/add/equipe',$data);
        $response->assertStatus(201);
    }
    /**
     * @test
     * A basic feature test example.
     *
     * @return void
     */
    public function UpdateEquipeTest()
    {
        $data = [
            'id' => 500,
            'name' => "test",
            'description' => "This is a test",
            'nationalite_id' => 5,
        ];

        $response = $this->json('put', 'api/update/equipe/500',$data);
        $response->assertStatus(200);
    }

    /**
     * @test
     * A basic feature test example.
     *
     * @return void
     */
    public function deleteEquipeTest()
    {
        $response = $this->delete('api/equipe/delete/500');

        $response->assertStatus(200);
    }
}
