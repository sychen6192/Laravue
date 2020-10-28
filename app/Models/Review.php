<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = ['id', 'content', 'rating'];
    use HasFactory;
    public function bookable()
    {
        return $this->belongsTo(bookable::class);
    }

    public function bookings()
    {
        return $this->belongsTo(Booking::class);
    }
    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }
}
