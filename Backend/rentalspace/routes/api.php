<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\VendorController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UtilController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\UserController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getvendors',[VendorController::class,'viewAllVendor']);
Route::post('/vendordelete',[VendorController::class,'vendorDelete']);
Route::post('/getvendorbyid',[VendorController::class,'getVendorById']);
Route::post('/updatevendor',[VendorController::class,'updateVendor']);
Route::post('/addvendor', [VendorController::class, 'addVendor']);

Route::post('/getproducts', [ProductController::class, 'viewAllProducts']);
Route::get('/getproducts/all', [ProductController::class, 'getAllProducts']);
Route::post('/deleteproduct', [ProductController::class, 'deleteProduct']);
Route::post('/addproduct', [ProductController::class, 'addProduct']);
Route::post('/updateproduct', [ProductController::class, 'updateProduct']);
Route::post('/getproductbyid', [ProductController::class, 'getProductById']);

Route::post('/addcategory', [CategoryController::class, 'addcategory']);
Route::post('/addsubcategory', [CategoryController::class, 'addsubcategory']);
Route::get('/getcategory', [CategoryController::class, 'getcategory']);
Route::get('/getsubcategory', [CategoryController::class, 'getsubcategory']);
Route::get('/getsubcatbyid', [CategoryController::class, 'getSubccatbyId']);
Route::post('/getcategorybyid', [CategoryController::class, 'getcategorybyid']);
Route::post('/updatecategory', [CategoryController::class, 'updatecategory']);
Route::post('/deletecategory', [CategoryController::class, 'deletecategory']);


Route::post('/login', [UtilController::class, 'login']);

Route::post('/fileupload', [UtilController::class, 'fileupload']);

Route::post('/addcart', [CartController::class, 'addCart']);
Route::post('/getallcart', [CartController::class, 'viewAllCart']);
Route::post('/deletecart', [CartController::class, 'deleteCart']);



Route::post('/addbookings', [BookingController::class, 'addBookings']);
Route::post('/getbookingsbyvendorid', [BookingController::class, 'viewbokingsByVedorId']);
Route::post('/acceptbooking', [BookingController::class, 'acceptBooking']);
Route::post('/rejectbooking', [BookingController::class, 'rejectBooking']);
Route::post('/getbookingsbyuserid', [BookingController::class, 'viewbookingsByUserId']);
Route::post('/changeExpire', [BookingController::class, 'changeExpire']);
Route::post('/addfeedback', [BookingController::class, 'addFeedback']);

Route::post('/registeruser', [UserController::class, 'registerUser']);