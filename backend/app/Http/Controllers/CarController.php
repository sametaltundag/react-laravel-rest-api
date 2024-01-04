<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CarController extends Controller
{
    public function index(){
        $cars = Car::select('id','baslik','marka','model','vites','renk','yil','kullanici','image','created_at')->get();

        return response()->json(['message' => "success", 'data' => $cars], 200);
    }

    public function insert(Request $req){
        DB::table('cars')->insert([

           'baslik' => $req->input('baslik'),
           'marka' => $req->input('marka'),
           'model' => $req->input('model'),
           'vites' => $req->input('vites'),
           'renk' => $req->input('renk'),
           'yil' => $req->input('yil'),
           'created_at' => date('Y-m-d H:i:s'),
           'updated_at' => date('Y-m-d H:i:s'),
        ]);
        return response()->json(['message' => "İlan Oluşturuldu"], 200);
    }

    public function edit($id){
        $car = Car::find($id);
        if($car){
            return response()->json(['message' => "İlan bulundu", 'data' => $car], 200);
        } else {
            return response()->json(['message' => "İlan bulunamadı"], 404);
        }
    }

    public function update(Request $req, $id){
        $car = Car::find($id);
        if($car){
            $car->baslik = $req->input('baslik');
            $car->marka = $req->input('marka');
            $car->model = $req->input('model');
            $car->vites = $req->input('vites');
            $car->renk = $req->input('renk');
            $car->yil = $req->input('yil');
            $car->save();
            return response()->json(['message' => "İlan güncellendi", 'data' => $car], 200);
        } else {
            return response()->json(['message' => "İlan bulunamadı"], 404);
        }
    }

    public function delete($id){
        $car = Car::find($id);
        if($car){
            $car->delete();
            return response()->json(['message' => "İlan silindi"], 200);
        } else {
            return response()->json(['message' => "İlan bulunamadı"], 404);
        }
    }
}
