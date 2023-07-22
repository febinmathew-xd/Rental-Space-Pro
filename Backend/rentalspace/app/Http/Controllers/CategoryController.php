<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function addcategory(Request $req)
    {
        $insert_arr = [
            'category' => $req->category,
        ];
        DB::table('category')->insert($insert_arr);

        echo json_encode('success');
    }
    public function getcategory()
    {
        $result = DB::table('category')->get();
        echo json_encode($result);
    }
    public function getcategorybyid(Request $req)
    {
        $result = DB::table('category')->where('id', $req->id)->first();

        echo json_encode($result);
    }
    public function updatecategory(Request $req)
    {
        $insert_arr = [
            'category' => $req->category,
        ];
        $result = DB::table('category')
            ->where('id', $req->id)
            ->update($insert_arr);

        echo json_encode('success');
    }
    public function deletecategory(Request $req)
    {
        DB::table('category')
            ->where('id', $req->id)
            ->delete();
        echo json_encode('success');
    }

    public function addsubcategory(Request $req)
    {
        $insert_arr = [
            'categoryid' => $req->categoryid,
            'subcategory' => $req->subcategory,
        ];
        DB::table('subcategory')->insert($insert_arr);

        echo json_encode('success');
    }
    public function getsubcategory()
    {
        $result = DB::table('subcategory')
        ->select('*','subcategory.id as subcatid')
        ->join('category','subcategory.categoryid','=','category.id')->get();
        echo json_encode($result); 
    }

    
}
