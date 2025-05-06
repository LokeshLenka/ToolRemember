<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tool;
// Removed unused import

class ToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tools = Tool::all();

        return response()->json([
            'tools' => $tools,
            "status" => 200,
            "message" => "Tools fetched successfully"
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data strictly
        $request->validate([
            'tool_name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'tool_url' => 'required|url',
        ]);

        try {
            // Use fillable fields to prevent mass assignment vulnerabilities
            if ($tool = Tool::create($request->all())) {

                return response()->json([
                    'tool' => $tool,
                    'status' => 201,
                    'message' => 'Tool created successfully',
                ], 201);
            }
        } catch (\Exception $e) {
            // Handle unexpected exceptions safely
            return response()->json([
                'status' => 500,
                'message' => 'An error occurred while storing to the database.',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal Server Error',
            ], 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tools = Tool::find($id);
        if (!$tools) {
            return response()->json([
                "status" => 404,
                "message" => "Tool not found"
            ]);
        }
        return response()->json([
            'tool' => $tools,
            "status" => 200,
            "message" => "Tool fetched successfully"
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'tool_name' => 'string|max:255',

        ]);

        $tool = Tool::find($id);
        if (!$tool) {
            return response()->json([
                "status" => 404,
                "message" => "Tool not found"
            ]);
        }

        $tool->update($request->all());

        return response()->json([
            'tool' => $tool,
            "status" => 200,
            "message" => "Tool updated successfully"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tool = Tool::find($id);
        if (!$tool) {
            return response()->json([
                "status" => 404,
                "message" => "Tool not found"
            ]);
        }

        $tool->delete();

        return response()->json([
            "status" => 200,
            "message" => "Tool deleted successfully"
        ]);
    }
}
