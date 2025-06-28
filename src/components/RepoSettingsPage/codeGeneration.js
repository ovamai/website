import React from "react";
import { Info } from "lucide-react";

const CodeGenerationSettings = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow max-w-4xl">
      {/* Code Generation Language */}
      <div className="mb-6">
        <label className="block font-medium mb-1">
          Code Generation Language
        </label>
        <p className="text-sm text-gray-600 mb-2">
          Natural language in which you want CodeRabbit to write the review.
        </p>
        <div className="flex items-center gap-2">
          <input
            value="English (US)"
            disabled
            className="border px-4 py-2 rounded bg-gray-100 w-64 text-sm"
          />
          <div className="flex items-center text-xs text-gray-500">
            <Info className="w-4 h-4 mr-1" />
            Default language is English
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4" />

      {/* Path Instructions */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-medium text-sm">Path Instructions</h4>
          <p className="text-sm text-gray-500">
            Provide additional guidelines for docstring generation based on file
            paths.
          </p>
        </div>
        <button className="text-sm bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded border flex items-center gap-1">
          <span className="text-lg">+</span> Path Instructions
        </button>
      </div>

      {/* Unit Test Generation */}
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium text-sm">Unit Test Generation</h4>
          <p className="text-sm text-gray-500">
            Provide additional guidelines for unit test generation based on file
            paths.
          </p>
        </div>
        <button className="text-sm bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded border flex items-center gap-1">
          <span className="text-lg">+</span> Unit Test Generation
        </button>
      </div>
    </div>
  );
};

export default CodeGenerationSettings;
