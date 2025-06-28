import React, { useState } from "react";

const ChatSettings = () => {
  const [autoReply, setAutoReply] = useState(false);
  const [jira, setJira] = useState("Auto");
  const [linear, setLinear] = useState("Auto");

  const renderOptions = (selected, setSelected) => (
    <div className="flex items-start gap-2 mt-1">
      {["Auto", "Enabled", "Disabled"].map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`px-3 py-1 rounded border text-sm ${
            selected === option
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="p-6 bg-white rounded shadow-md w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Chat Settings</h2>

      {/* Auto Reply */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="font-medium">Auto Reply</h3>
          <p className="text-gray-600 text-sm mt-1">
            Enable the bot to reply automatically without requiring the user to
            tag it.
          </p>
        </div>
        <label className="inline-flex items-center cursor-pointer ml-4">
          <input
            type="checkbox"
            checked={autoReply}
            onChange={() => setAutoReply(!autoReply)}
            className="sr-only"
          />
          <div
            className={`relative w-11 h-6 rounded-full transition ${
              autoReply ? "bg-orange-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                autoReply ? "translate-x-5" : ""
              }`}
            ></div>
          </div>
        </label>
      </div>

      {/* Jira */}
      <div className="mb-6 flex">
        <div>
          <h3 className="font-medium">Jira</h3>
          <p className="text-gray-600 text-sm">
            Enable the Jira integration for opening issues, etc. 'Auto' disables
            the integration for public repositories.
          </p>
        </div>

        {renderOptions(jira, setJira)}
      </div>

      {/* Linear */}
      <div className="flex">
        <div>
          <h3 className="font-medium">Linear</h3>
          <p className="text-gray-600 text-sm">
            Enable the Linear integration for opening issues, etc. 'Auto'
            disables the integration for public repositories.
          </p>
        </div>

        {renderOptions(linear, setLinear)}
      </div>
    </div>
  );
};

export default ChatSettings;
