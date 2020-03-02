<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class FourSquareController extends Controller
{
        public function getLocations($name) {

        //Get params back from the Axios get Request
        //Setup actual Guzzle request
        $client = new Client();
        $response = $client->request('GET', 'https://api.foursquare.com/v2/venues/explore?', [
            'query' => [
                'v' => "20191009",
                'query' => $name,
                'near' => "Valletta",
                'client_id' => env('FOURSQUARE_CLIENT_ID'),
                'client_secret' => env('FOURSQUARE_SECRET_ID'),
            ]
        ]);

        //Return $result in JSON format 
        $results = $response->getBody();
        $results = json_decode($results);

        return response()->json($results);

     }

    public function getCategories() {

        //Setup actual Guzzle request
        $client = new Client();
        $response = $client->request('GET', 'https://api.foursquare.com/v2/venues/categories?'
        , [
            'query' => [
                'v' => "20191009",
                'client_id' => env('FOURSQUARE_CLIENT_ID'),
                'client_secret' => env('FOURSQUARE_SECRET_ID'),
            ]
        ]);

        //Return $result in JSON format
        $results = $response->getBody();
        $results = json_decode($results);

        return response()->json($results->response);

     }
}
 
