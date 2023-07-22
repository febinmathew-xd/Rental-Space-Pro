<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller{

    public function viewAllBookings (Request $request){
        $result = DB::table('bookings')->get();

        echo json_encode($result);
    }

   public function addBookings (Request $request){
        
        $insert_bookings = [
            'productid' => $request->productid,
            'userid' => $request->userid,
           /*  'vendorid' => $request->vendorid, */
            'startDate' => $request->startDate,
            'endDate' => $request->endDate,
            'totalDays' => $request->totalDays,
            'status' => 0,
            
            
            
        ];

        DB::table('bookings')->insert($request->all());

        echo json_encode('success');
   }

   public function addFeedback(Request $request){

    $insert_feedback = [
        'userid' => $request->userid,
        'title'=> $request->title,
        'feedback' => $request->feedback
    ];

    DB::table('feedback')->insert($request->all());

    echo json_encode('success');



   }
  

public function viewbokingsByVedorId(Request $request){
  
    $result = DB::table('bookings')
    ->select('bookings.*','product.name','product.description', 'product.image', 'product.price')
    ->join('product', 'bookings.productid', '=', 'product.id')
    ->where('product.vendorid', $request->id)
    ->get();

    echo json_encode($result);


}

public function acceptBooking (Request $request){
    
    $result= DB::table('bookings')->where('id', $request->id)->update($request->only('status'));

    echo json_encode($result);


}

public function rejectBooking(Request $request){

    $result= DB::table('bookings')->where('id', $request->id)->update($request->only('status'));

    echo json_encode($result);


}

public function changeExpire (Request $request){
    $result = DB::table('bookings')->where('id', $request->id)->update($request->only('expire'));

    echo json_encode($result);
}




public function viewbookingsByUserId(Request $request){
  
    $result = DB::table('bookings')
    ->select('bookings.*','product.name','product.description', 'product.image', 'product.price')
    ->join('product', 'bookings.productid', '=', 'product.id')
    ->where('bookings.userid', $request->id)
    ->get();

    echo json_encode($result);


}

}

