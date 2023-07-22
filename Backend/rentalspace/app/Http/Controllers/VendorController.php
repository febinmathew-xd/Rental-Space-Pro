<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VendorController extends Controller
{
    //

   
    public function addVendor(Request $request){
      
        
        $insert_array = [
            'email'=>$request->email,
            'password'=>$request->password,
            'usertype'=>1,
        ];

        $id = DB::table('login')->insertGetId($insert_array);


        $vendor = $request->only(['name','address','phone']);
        $vendor['loginid']=$id;

        DB::table('vendor')->insert($vendor);
        // $insert_arr = [
        //     'name'=>$request->name,
        //     'address'=>$request->address,
        //     'phone'=>$request->phone,
        //     'password'=>$request->password,
        //     'email'=>$request->email,
        // ];

        // // DB::table('vendor')->insert($request->all());
        // DB::table('vendor')->insert($request->except('usertype'));

        echo json_encode('success');

    }
    

    public function viewAllVendor(){
        $result = DB::table('vendor')->get();


        echo json_encode($result);
    }

    public function vendorDelete(Request $request){
        DB::table('vendor')->where('id',$request->id)->delete();

        echo json_encode('success');
    }
    public function getVendorById(Request $request){
        $result = DB::table('vendor')->where('id',$request->id)->first();

        echo json_encode($result);
    }
    public function updateVendor(Request $request){
        $result = DB::table('vendor')->where('id',$request->id)->update($request->except('id'));

        echo json_encode($result);
    }
}
