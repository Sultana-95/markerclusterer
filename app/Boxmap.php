<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Boxmap extends Model
{
    public $table = 'boxmaps';
    public $timestamps = false;
     protected $fillable = ['id', 'title', 'description', 'lng', 'lat', 'created_at', 'updated_at'];
}
