<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('baslik')->nullable();
            $table->string('marka')->nullable();
            $table->string('model')->nullable();
            $table->string('vites')->nullable();
            $table->string('renk')->nullable();
            $table->integer('yil')->nullable();
            $table->string('kullanici')->nullable();
            $table->longText('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
