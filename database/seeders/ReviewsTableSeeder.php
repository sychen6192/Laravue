<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Bookable;
use App\Models\Review;
class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Bookable::all()->each(function (Bookable $bookable) {
            $reviews = Review::factory()->times(random_int(5, 30))->make();
            $bookable->reviews()->saveMany($reviews);
        });
    }
}
