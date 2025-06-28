import Sidebar from "./SideFilter";
import React, { useState } from "react";
import { FaClock, FaRedoAlt, FaEllipsisV } from "react-icons/fa";

const Dashboard = () => {
  const [tab, setTab] = useState("Adoption");

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 bg-gray-50 min-w-70 min-h-screen">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6">
          {["Adoption", "Suggestion Breakdown"].map((label) => (
            <button
              key={label}
              onClick={() => setTab(label)}
              className={`px-4 py-2 rounded border ${
                tab === label ? "bg-gray-200 font-semibold" : "bg-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Filters + Time Selector */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex gap-2 flex-wrap">
            {["Repository Name", "Username", "Team"].map((filter) => (
              <>
                <label className="ml-2 bg-gray-200 text-sm w-[120px] h-[50px]  rounded-md text-center p-2">
                  {filter}
                </label>
                <select
                  key={filter}
                  className="border border-gray-300 rounded px-3 py-1 text-sm"
                >
                  <option>{filter}</option>
                  <option>All</option>
                </select>
              </>
            ))}
          </div>
        </div>
        <div className="flex mt-3  items-center flex-end space-x-2 mb-5 text-sm">
          <FaClock className="text-gray-500" />
          <span className="border px-2 py-1 rounded">Last 30 days</span>
          <span className="text-orange-600 font-semibold">UTC</span>
          <FaRedoAlt className="text-gray-500 cursor-pointer" />
          <FaEllipsisV className="text-gray-500 cursor-pointer" />
        </div>

        {/* Top Stats Grid */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="bg-white  border rounded p-4">
            <h4 className="text-sm text-center font-medium mb-2 text-gray-700">
              PRs Reviewed
            </h4>
            <div className="flex p-10 justify-between">
              <div className="flex flex-col justify-between  text-lg font-bold">
                <span>Total</span>
                <span className="self-center text-orange-500 text-2xl">0</span>
              </div>
              <div className="flex flex-col justify-between text-lg font-bold">
                <span>Incremental</span>
                <span className="self-center text-orange-500 text-2xl">0</span>
              </div>
            </div>
          </div>

          <div className="bg-white  border rounded p-4">
            <h4 className="text-sm text-center font-medium mb-2 text-gray-700">
              OvamAi Suggestions
            </h4>
            <div className="flex p-10 justify-between">
              <div className="flex flex-col justify-between  text-lg font-bold">
                <span>Review</span>
                <span className="self-center text-pink-400 text-2xl">0</span>
              </div>
              <div className="flex flex-col justify-between text-lg font-bold">
                <span>Comments</span>
                <span className="self-center text-pink-400 text-2xl">0</span>
              </div>
            </div>
          </div>
          <div className="bg-white  border rounded p-4">
            <h4 className="text-sm text-center font-medium mb-2 text-gray-700">
              Learnings
            </h4>
            <div className="flex p-10 justify-between">
              <div className="flex flex-col justify-between  text-lg font-bold">
                <span>Used</span>
                <span className="self-center text-cyan-500  text-2xl">0</span>
              </div>
              <div className="flex flex-col justify-between text-lg font-bold">
                <span>Created</span>
                <span className="self-center text-cyan-500  text-2xl">0</span>
              </div>
            </div>
          </div>

        
        </div>

        {/* Leaderboard */}
        <div className="bg-white border rounded w-[100%] h-[100%] p-6 text-center text-sm text-gray-500">
          Developer Adoption Leaderboard
          <div className="mt-6 text-gray-400">No data</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
