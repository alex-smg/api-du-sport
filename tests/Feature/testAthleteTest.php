<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class testAthleteTest extends TestCase
{
    /**
     * @test
     * A basic feature test example.
     *
     * @return void
     */
    public function allAthletesTest()
    {
        $response = $this->get('api/allathletes');

        $response->assertStatus(200);
    }

    /**
     * @test
     * A basic feature test example.
     *
     * @return void
     */
    public function findAthleteTest()
    {
        $response = $this->get('api/athlete/15');

        $response->assertStatus(200);
    }
    /**
     * @test
     * A basic feature test example.
     *
     * @return void
     */
    public function postAthleteTest()
    {
        $data = [
            'id'=> 500,
            'name' => "test",
            'description' => "This is a test",
            'equipe_id' => 5,
            'image' => "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ];

        $response = $this->json('POST', 'api/add/athlete',$data);
        $response->assertStatus(201);
    }
    /**
     * @test
     * A basic feature test example.
     *
     * @return void
     */
    public function UpdateAthleteTest()
    {
        $data = [
            'id' => 500,
            'name' => "test",
            'description' => "This is a test",
            'equipe_id' => 5,
            'image' => "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ];

        $response = $this->json('put', 'api/update/athlete/500',$data);
        $response->assertStatus(200);
    }

    /**
     * @test
     * A basic feature test example.
     *
     * @return void
     */
    public function deleteAthleteTest()
    {
        $response = $this->delete('api/athlete/delete/500');

        $response->assertStatus(200);
    }
}
