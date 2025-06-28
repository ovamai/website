import React, { useState } from "react";

const Toggle = ({ enabled, onToggle }) => (
  <label className="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      checked={enabled}
      onChange={onToggle}
      className="sr-only"
    />
    <div
      className={`w-11 h-6 bg-gray-300 rounded-full ${
        enabled ? "bg-orange-500" : ""
      } relative`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 left-0.5 transform transition-transform ${
          enabled ? "translate-x-5" : ""
        }`}
      />
    </div>
  </label>
);

const FinishingTouches = () => {
  const [profile, setProfile] = useState("Chill");
  const [toggles, setToggles] = useState({
    requestChanges: false,
    summary: true,
    summaryPlaceholder: true,
    walkthrough: true,
    autoTitle: true,
    toggle6: true,
    toggle7: true,
    toggle8: true,
    toggle9: true,
    toggle10: true,
  });

  const [placeholders, setPlaceholders] = useState({
    summary: "@coderabbit summary",
    autoTitle: "@coderabbitaf",
    titleInstructions: "",
  });

  const handleToggle = (key) =>
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="p-6 bg-white rounded shadow max-w-4xl w-full">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-medium">Path Instructions</h3>
          <p className="text-sm text-gray-600">
            Provide specific additional guidelines for code review based on file
            paths.
          </p>
        </div>
        <button className="text-sm bg-gray-100 px-4 py-2 rounded border hover:bg-gray-200">
          + Path Instructions
        </button>
      </div>
      <hr />
      {/* Profile Switch */}
      {/* Profile Switch */}
      <div className="flex flex-col justify-start mb-4 gap-4">
        <div>
          <h2 className="mt-4">Profile</h2>
          <p className="text-gray-500">
            Set the profile for reviews. Assertive profile yields more feedback,
            that may be considered nitpickly.
          </p>
        </div>

        <div className="mt-3 inline-flex rounded overflow-hidden">
          {["Chill", "Assertive"].map((option) => (
            <button
              key={option}
              onClick={() => setProfile(option)}
              className={`px-4 py-1 text-sm ${
                profile === option
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Toggles and Inputs */}
      {[
        {
          key: "requestChanges",
          label: "Request Changes Workflow",
          desc: "Approve the review once CodeRabbit’s comments are resolved.",
        },
        {
          key: "summary",
          label: "High Level Summary",
          desc: "Generate a high level summary of the changes in the PR / MR description.",
        },
        {
          key: "summaryPlaceholder",
          label: "High Level Summary Placeholder",
          desc: "Placeholder in the PR / MR description.",
        },
        {
          key: "walkthrough",
          label: "High Level Summary in Walkthrough",
          desc: "Include the summary in walkthrough comment.",
        },
        {
          key: "autoTitle",
          label: "Auto Title Placeholder",
          desc: "Keyword in title to auto-generate the title.",
        },
        {
          key: "titleInstructions",
          label: "Auto Title Instructions",
          desc: "Add guidelines to auto-generate title.",
        },
        {
          key: "toggle6",
          label: "High Level Summary",
          desc: "Summary of changes in PR / MR.",
        },
        {
          key: "toggle7",
          label: "High Level Summary",
          desc: "Summary of changes in PR / MR.",
        },
        {
          key: "toggle8",
          label: "High Level Summary",
          desc: "Summary of changes in PR / MR.",
        },
        {
          key: "toggle9",
          label: "High Level Summary",
          desc: "Summary of changes in PR / MR.",
        },
        {
          key: "toggle10",
          label: "High Level Summary",
          desc: "Summary of changes in PR / MR.",
        },
      ].map(({ key, label, desc }) => (
        <div key={key} className="flex justify-between items-start mb-4">
          <div className="w-2/3">
            <h4 className="text-sm font-medium">{label}</h4>
            <p className="text-sm text-gray-500">{desc}</p>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            {key.includes("Placeholder") || key === "titleInstructions" ? (
              <input
                type="text"
                value={placeholders[key] || ""}
                onChange={(e) =>
                  setPlaceholders((prev) => ({
                    ...prev,
                    [key]: e.target.value,
                  }))
                }
                className="border px-3 py-1.5 rounded bg-gray-100 w-full"
              />
            ) : (
              <Toggle
                enabled={toggles[key]}
                onToggle={() => handleToggle(key)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinishingTouches;
