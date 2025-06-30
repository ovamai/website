import React, { useState } from "react";
import Sidebar from "./SideFilter";

export default function ConfigurationSettings() {
  const [earlyAccess, setEarlyAccess] = useState(false);
  const [freeTier, setFreeTier] = useState(true);
  const [dataRetention, setDataRetention] = useState(true);

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="min-h-screen bg-white p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Organization Settings</h1>
            <p className="text-gray-600 max-w-2xl">
              You can configure settings applicable to the entire organization.
              Settings configured at the repository level will override these.
            </p>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded">
            Apply Changes
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {[
            "General",
            "Review",
            "Chat",
            "Knowledge Base",
            "Code Generation",
          ].map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 border rounded ${
                tab === "General"
                  ? "bg-gray-100 border-gray-300 font-medium"
                  : "text-gray-500 border-transparent hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Settings Card */}
        <div className="border border-gray-200 rounded p-6 space-y-6 max-w-3xl">
          {/* Review Language */}
          <div>
            <label className="block font-medium">Review Language</label>
            <p className="text-sm text-gray-500">
              Natural language in which you want CodeRabbit to write the review.
            </p>
            <select className="mt-2 border rounded px-4 py-2 w-full max-w-xs">
              <option>English (US)</option>
            </select>
            <p className="text-sm text-gray-400 mt-1">
              ℹ Default language is English
            </p>
          </div>

          {/* Tone Instructions */}
          <div>
            <label className="block font-medium">Tone Instructions</label>
            <p className="text-sm text-gray-500">
              Set the tone of reviews and chat. Example: 'You must use talk like
              Mr. T. I pity the fool who doesn't!'
            </p>
            <input
              type="text"
              className="mt-2 border rounded px-4 py-2 w-full"
              placeholder=""
            />
          </div>

          {/* Toggles */}
          <div className="space-y-4">
            <Toggle
              label="Early Access"
              description="Enable early-access features."
              enabled={earlyAccess}
              onToggle={() => setEarlyAccess(!earlyAccess)}
            />
            <Toggle
              label="Enable Free Tier"
              description="Enable free tier features for users not on a paid plan."
              enabled={freeTier}
              onToggle={() => setFreeTier(!freeTier)}
            />
            <Toggle
              label="Data Retention"
              description={
                <>
                  Enable data retention by CodeRabbit. If disabled, we will not
                  collect any data for your Knowledge Base, nor will we cache
                  any code or data between reviews.{" "}
                  <span className="text-yellow-600">⚠</span> We recommend
                  allowing data retention, as it improves and speeds up your
                  reviews.
                </>
              }
              enabled={dataRetention}
              onToggle={() => setDataRetention(!dataRetention)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Toggle Component
function Toggle({ label, description, enabled, onToggle }) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-sm text-gray-500 max-w-lg">{description}</div>
      </div>
      <button
        onClick={onToggle}
        className={`ml-4 w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
          enabled ? "bg-orange-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
            enabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
