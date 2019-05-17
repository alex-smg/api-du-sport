<?php

namespace App\Http\Controllers;

require '../vendor/autoload.php';
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ChuckNorrisController extends Controller
{
    //
    public function index()
    {
        $client = new Client();
        $res = $client->request('GET', 'https://api.chucknorris.io/jokes/random');
        // $prout = $res->getStatusCode();
        // $quotesoftheday = $prout;
        echo $res->getStatusCode();
        //"200"
        echo $res->getHeader('content-type')[0];
        // 'application/json; charset=utf8'
        echo $res->getBody();
        //{"type":"User"...'
    }
}
