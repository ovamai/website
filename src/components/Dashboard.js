import React, { useState } from "react";
import Sidebar from "./SideFilter";
import { FaClock, FaRedoAlt, FaEllipsisV } from "react-icons/fa";
import useRepositories from "./useRepos";
import Select from "react-select"; // ✅ added

const Dashboard = () => {
  const [tab, setTab] = useState("Adoption");
  const { repositories, error } = useRepositories();
  const [selectedRepo, setSelectedRepo] = useState("");

  const repoOptions = repositories.map((repo) => ({
    label: repo.name,
    value: repo.name,
  }));

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 bg-gray-50 min-h-screen w-full">
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

        {/* Filters */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex gap-2 flex-wrap items-center w-full">
            {/* Repository Searchable Dropdown */}
            <label className="ml-2 bg-gray-200 text-sm w-[120px] h-[50px] rounded-md text-center p-2">
              Repository Name
            </label>
            <div className="min-w-[250px] w-[300px]">
              <Select
                options={repoOptions}
                value={repoOptions.find((opt) => opt.value === selectedRepo)}
                onChange={(selected) =>
                  setSelectedRepo(selected ? selected.value : "")
                }
                placeholder="Search Repository..."
                isClearable
              />
            </div>

            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

            {/* Static Filters */}
            {["Username", "Team"].map((filter) => (
              <React.Fragment key={filter}>
                <label className="ml-2 bg-gray-200 text-sm w-[120px] h-[50px] rounded-md text-center p-2">
                  {filter}
                </label>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>{filter}</option>
                  <option>All</option>
                </select>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Time Selector */}
        <div className="flex items-center space-x-2 mb-5 text-sm">
          <FaClock className="text-gray-500" />
          <span className="border px-2 py-1 rounded">Last 30 days</span>
          <span className="text-orange-600 font-semibold">UTC</span>
          <FaRedoAlt className="text-gray-500 cursor-pointer" />
          <FaEllipsisV className="text-gray-500 cursor-pointer" />
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mb-6">
          {[
            {
              title: "PRs Reviewed",
              colors: "text-orange-500",
              metrics: ["Total", "Incremental"],
            },
            {
              title: "OvamAi Suggestions",
              colors: "text-pink-400",
              metrics: ["Review", "Comments"],
            },
            {
              title: "Learnings",
              colors: "text-cyan-500",
              metrics: ["Used", "Created"],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded p-4 flex-1 min-w-[300px]"
            >
              <h4 className="text-sm text-center font-medium mb-2 text-gray-700">
                {item.title}
              </h4>
              <div className="flex p-10 justify-between">
                {item.metrics.map((label) => (
                  <div
                    key={label}
                    className="flex flex-col justify-between text-lg font-bold"
                  >
                    <span>{label}</span>
                    <span className={`self-center ${item.colors} text-2xl`}>
                      0
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard */}
        <div className="bg-white border rounded w-full p-6 text-center text-sm text-gray-500">
          Developer Adoption Leaderboard
          <div className="mt-6 text-gray-400">No data</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
