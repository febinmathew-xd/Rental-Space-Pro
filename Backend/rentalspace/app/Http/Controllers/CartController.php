<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function addCart(Request $request)
    {

        $insert_array = [
            'itemid' =>$request->itemid,
            'userid' => $request->userid,
        ];

        DB::table('cart')->updateOrInsert(['userid'=>$request->userid],$insert_array);

        echo json_encode('sucess');
    }

    public function viewAllCart(Request $request)
    {
        $result = 
        DB::table('cart')
        ->select('cart.*','cart.id as cartid','product.name', 'product.price' , 'product.description', 'product.image','vendor.name as vendorname',)
        ->join('product','product.id','=','cart.itemid')
        ->join('vendor','vendor.loginid','=','product.vendorid')
        ->where('userid',$request->userid)
        ->get();

        echo json_encode($result);
    }

    public function deleteCart(Request $request){
        DB::table('cart')->where('id', $request->id)->delete();

        echo json_encode('success');
    }

    public function getCartById(Request $request){
        $result = DB::table('cart')->where('id', $request->id)-first();

        echo json_encode('success');
    }
}
?>