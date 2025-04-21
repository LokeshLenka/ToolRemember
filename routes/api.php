<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ToolController;
use App\Http\Controllers\ProfileController;

Route::prefix('tools')->group(function () {
    Route::get('/', [ToolController::class, 'index']);
    Route::get('/{tool}', [ToolController::class, 'show']);
    Route::post('/', [ToolController::class, 'store']);
    Route::put('/{tool}', [ToolController::class, 'update']);
    Route::delete('/{tool}', [ToolController::class, 'destroy']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
