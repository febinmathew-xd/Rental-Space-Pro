<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller{

    public function registerUser(Request $request){

        $insert_user = [
            'email'=> $request->email,
            'password' => $request->password,
            'usertype' => 2,
        ];

       $id =  DB::table('login')->insertGetId($insert_user);
       
       $user = $request->only(['name', 'address', 'phone']);
       $user['loginid'] = $id;

       DB::table('user')->insert($user);

       echo json_encode('success');
    }
}