<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{

    public function viewAllProducts (Request $request){
        $result = DB::table('product')
        ->select('product.*','product.id as productid','category.category','subcategory.subcategory')
        ->join('category', 'product.categoryId' , '=', 'category.id')
        ->join('subcategory', 'product.subcatId', '=', 'subcategory.id')
        ->where('product.vendorid',$request->vendorid)
        ->get();




        echo json_encode($result);
    }

    public function getAllProducts(){
        $result = DB::table('product')->get();
        echo json_encode($result);
    }

    

    public function addProduct (Request $request){

         $insert_product = [
            'name' => $request->name,
             'price' => $request->price,
             'description' => $request->description,
             'categoryId' => $request->categoryId,
             'subcatId' => $request->subcatId,
         ]; 

        DB::table('product')->insert($request->all());

        echo json_encode('success');
    }


    public function deleteProduct(Request $request){
        DB::table('product')->where('id', $request->id)->delete();
        echo json_encode ('succ ess');
    }

    public function getProductById(Request $request){
        $result = DB::table('product')->where('id', $request->id)->first();

        echo json_encode($result);
    }

    public function updateProduct(Request $request){
        $result = DB::table('product')->where('id', $request->id)->update($request->except('id'));

        echo json_encode($result);
    }


}