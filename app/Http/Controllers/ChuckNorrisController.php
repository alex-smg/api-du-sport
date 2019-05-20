<?php

namespace App\Http\Controllers;

require '../vendor/autoload.php';
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ChuckNorrisController extends Controller
{
    var $quotesoftheday;
    var $chuckJson;
    var $statuscode;
    //
    public function index()
    {
        $client = new Client();
        $res = $client->request('GET', 'https://api.chucknorris.io/jokes/random');
        $statuscode = $res->getStatusCode();
        if($statuscode == "200")
        {
            $chuckJson = $res->getBody();
        } else {
            $chuckJson = ['value'=>"Pas de citation aujourd'hui"];
        }
        return $chuckJson;
    }

}
