<?php

namespace Database\Seeders;

use App\Models\Car;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Car::create([
            'baslik' => 'VOLVO/S60/OTOMATİK/142 BİN KM/PREMİUM/DERİ/ÇARPIŞMA ÖNLEYİCİ',
            'marka' => 'Volvo',
            'model' => 'S60',
            'vites' => 'Yarı Otomatik',
            'renk' => 'Siyah',
            'yil' => 2013,
            'kullanici' => 'Ahmet Aksoy',
            'image' => 'https://arbstorage.mncdn.com/ilanfotograflari/2023/12/20/24037349/1ce59363-eeeb-49ad-910a-e47120377a79_image_for_silan_24037349_580x435.jpg',
        ]);

        Car::create([
            'baslik' => "MY PRESTIGE MOTORS'DAN 2013 MODEL MERCEDES A180 AMG+CAM TAVAN",
            'marka' => 'Mercedes',
            'model' => 'A 180 CDI',
            'vites' => 'Otomatik',
            'renk' => 'Beyaz',
            'yil' => 2019,
            'kullanici' => 'Tevfik Paslı',
            'image' => 'https://arbstorage.mncdn.com/ilanfotograflari/2023/11/18/23812939/adf06e61-cfb5-4cf0-ac4d-b6f739f726b0_image_for_silan_23812939_580x435.jpg',
        ]);

        Car::create([
            'baslik' => "Peugeot 301 1.2 VTi Active 2013 Model Ankara",
            'marka' => 'Peugeot',
            'model' => '1.2 VTi Active',
            'vites' => 'Manuel',
            'renk' => 'Beyaz',
            'yil' => 2017,
            'kullanici' => 'Sude Salaş',
            'image' => 'https://arbstorage.mncdn.com/ilanfotograflari/2023/12/24/24061258/c0886721-fe51-43df-b99d-af1eb699c1fb_image_for_silan_24061258_580x435.jpg',
        ]);
    }
}
