<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UtilController extends Controller
{

    
    public function login(Request $request){

        // $where_arr = [
        //     'email'=>$request->email,
        //     'password'=>$request->password,
        // ];
        $result = DB::table('login')->where($request->all())->first();

        if(!empty($result)){

            if($result->usertype==0){
                $result = $result;
            }else if($result->usertype==1){
                
                $result = DB::table('login')->join('vendor','vendor.loginid','=','login.id')->where($request->all())->first();
            }else if($result->usertype==2){
                $result = DB::table('login')->join('user','user.loginid','=', 'login.id')->where($request->all())->first();
            }
            echo json_encode($result);
        }else{
            echo json_encode(false);
        }



    }


    public function fileupload(Request $request){
        $file = $request->file('image');

        $filename = time().'_'.$file->getClientOriginalName();

        $file->move('uploads',$filename);


        echo json_encode($filename);


    }

}