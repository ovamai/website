import React, { useState } from "react";

const General = () => {
  const [language, setLanguage] = useState("English (US)");
  const [earlyAccess, setEarlyAccess] = useState(false);
  const [freeTier, setFreeTier] = useState(true);

  return (
    <div className="space-y-6 border p-6 rounded-lg bg-gray-50">
      {/* Review Language */}
      <div>
        <label className="block text-sm font-medium mb-1">Review Language</label>
        <p className="text-xs text-gray-500 mb-2">
          Natural language in which you want CodeRabbit to write the review.
        </p>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border p-2 rounded w-64"
        >
          <option>English (US)</option>
          <option>English (UK)</option>
        </select>
        <p className="text-xs text-gray-400 mt-1">Default language is English</p>
      </div>

      {/* Tone Instructions */}
      <div>
        <label className="block text-sm font-medium mb-1">Tone Instructions</label>
        <p className="text-xs text-gray-500 mb-2">
          Set the tone of reviews and chat. Example: 'You must talk like Mr. T. I pity the fool who doesn’t!'
        </p>
        <input
          type="text"
          placeholder="This field is disabled"
          className="w-full p-2 border rounded bg-gray-100"
          disabled
        />
      </div>

      {/* Early Access */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-sm">Early Access</h4>
          <p className="text-xs text-gray-500">Enable early-access features.</p>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={earlyAccess}
            onChange={() => setEarlyAccess(!earlyAccess)}
          />
          <div
            className={`w-11 h-6 rounded-full ${
              earlyAccess ? "bg-orange-500" : "bg-gray-300"
            } relative transition-colors duration-200`}
          >
            <div
              className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                earlyAccess ? "translate-x-5" : ""
              }`}
            ></div>
          </div>
        </label>
      </div>

      {/* Free Tier */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-sm">Enable Free Tier</h4>
          <p className="text-xs text-gray-500">
            Enable free tier features for users not on a paid plan.
          </p>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={freeTier}
            onChange={() => setFreeTier(!freeTier)}
          />
          <div
            className={`w-11 h-6 rounded-full ${
              freeTier ? "bg-orange-500" : "bg-gray-300"
            } relative transition-colors duration-200`}
          >
            <div
              className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                freeTier ? "translate-x-5" : ""
              }`}
            ></div>
          </div>
        </label>
      </div>

      
    </div>
  );
};

export default General;
