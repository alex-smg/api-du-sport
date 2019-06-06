<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
use Illuminate\Http\Request;
use App\User;
use App\Message;

class ContactsController extends Controller
{
    public function get(){
        $contacts = User::where('id', '!=', auth()->id())->get();
        return response()->json($contacts);
    }
    public function getauth(){
        $auth = auth()->user();
        return response()->json($auth);
    }
    public function getMessagesFor($id){
       $message = Message::where('from', $id)->orwhere('to', $id)->get();
       return response()->json($message);
    }
    public function send(Request $request)
    {
        $message = Message::create([
            'from' => auth()->id(),
            'to' => $request->contact_id,
            'text' => $request->text
        ]);
        broadcast(new NewMessage($message));
        return response()->json($message);
    }
}