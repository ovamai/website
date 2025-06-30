import Sidebar from "./SideFilter";
import React from "react";

export default function LearningsPage() {
  return (
    <div className="flex gap-10 min-h-screen bg-white ">
      <div>
        <Sidebar />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-blue-600">L</span>earnings
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mb-6">
          By opting in, CodeRabbit will utilize and store insights from your
          interactions to enhance its learning over time. This process allows
          CodeRabbit to deliver increasingly refined and personalized
          assistance. Below, you'll find learnings generated across various
          repositories.
        </p>

        {/* Download Button */}
        <button className="mb-6 px-4 py-2 bg-gray-100 border rounded hover:bg-gray-200 text-sm">
          ⬇ Download CSV
        </button>

        {/* Search and Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <label htmlFor="search" className="sr-only">
              Similarity Search
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded px-4 py-2 w-64"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="topk" className="sr-only">
              Top K
            </label>
            <input
              id="topk"
              type="number"
              defaultValue={10}
              className="border border-gray-300 rounded px-3 py-2 w-20"
            />
          </div>

          <button className="px-4 py-2 bg-gray-100 border rounded hover:bg-gray-200 text-sm">
            + Filters
          </button>
        </div>

        {/* Results section */}
        <div className="bg-gray-50 border border-gray-200 rounded p-10 text-center text-gray-500">
          No results
        </div>
      </div>
      {/* Header */}
    </div>
  );
}
