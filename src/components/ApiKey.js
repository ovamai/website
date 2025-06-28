import React from "react";
import { FaKey } from "react-icons/fa";
import SideFilter from "./SideFilter";

const ApiKeys = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideFilter />
      </div>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4"
        style={{ alignItems: "center", width: "100%" }}
      >
        <div className="max-w-xl w-full bg-white p-10 border rounded shadow-sm text-center">
          <FaKey size={32} className="mx-auto text-gray-500 mb-4" />

          <h2 className="text-xl font-semibold mb-2">Create an API Key</h2>
          <p className="text-sm text-gray-600 mb-6">
            Create an API key to access the CodeRabbit API.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2 rounded">
            <FaKey className="inline mr-2 -mt-1" />
            Create API Key
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;
