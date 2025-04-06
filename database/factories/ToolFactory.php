<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tool>
 */
class ToolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
          "tool_name" => $this->faker->word(),
          "tool_description" => $this->faker->sentence(),
          "tool_url" => $this->faker->url(),
          "is_dev_tool" => $this->faker->boolean(),
        //   "is_free" => $this->faker->boolean(),
        //   "is_open_source" => $this->faker->boolean(),
          "is_favorite" => $this->faker->boolean(),
          "category_id" => $this->faker->numberBetween(1, 10),
          "subcategory_id" => $this->faker->numberBetween(1, 10),
        ];
    }
}
