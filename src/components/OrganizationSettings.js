import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import TabNavigation from "./TabNavigation";
import Toggle from "./Toggle";
import SideFilter from "./SideFilter";

const OrganizationSettings = ({ onSave }) => {
  const [activeTab, setActiveTab] = useState("review");
  const [reviewLanguage, setReviewLanguage] = useState("English (US)");
  const [toneInstructions, setToneInstructions] = useState(
    "Set the tone of reviews and chat Example: You must use talk like Mr. T. I pity the fool who doesn't!"
  );
  const [earlyAccess, setEarlyAccess] = useState(false);
  const [enableFreeTier, setEnableFreeTier] = useState(true);
  const [dataRetention, setDataRetention] = useState(true);

  const tabs = [
    { id: "general", label: "General" },
    { id: "review", label: "Review" },
    { id: "chat", label: "Chat" },
    { id: "knowledge-base", label: "Knowledge Base" },
    { id: "code-generation", label: "Code Generation" },
  ];

  const languages = [
    "English (US)",
    "English (UK)",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
  ];

  return (
    <div style={{display:"flex"}}>
      <div>
        <SideFilter />
      </div>
      <div className="flex-1 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Organization Settings
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              You can configure settings applicable to the entire organization.
              Settings configured at the repository level will override these.
            </p>
          </div>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
          >
            Apply Changes
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6">
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {activeTab === "review" && (
            <>
              {/* Review Language */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Review Language
                  </h3>
                  <p className="text-sm text-gray-600">
                    Natural language in which you want CodeRabbit to write the
                    review.
                  </p>
                </div>
                <div className="max-w-xs">
                  <div className="relative">
                    <select
                      value={reviewLanguage}
                      onChange={(e) => setReviewLanguage(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white appearance-none"
                    >
                      {languages.map((lang) => (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Default pull language is English
                  </p>
                </div>
              </div>

              {/* Tone Instructions */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Tone Instructions
                  </h3>
                </div>
                <div className="max-w-2xl">
                  <textarea
                    value={toneInstructions}
                    onChange={(e) => setToneInstructions(e.target.value)}
                    rows={4}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 resize-none"
                  />
                </div>
              </div>

              {/* Early Access */}
              <div className="flex items-center justify-between py-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Early Access
                  </h3>
                  <p className="text-sm text-gray-600">
                    Enable early access features.
                  </p>
                </div>
                <Toggle enabled={earlyAccess} onChange={setEarlyAccess} />
              </div>

              {/* Enable Free Tier */}
              <div className="flex items-center justify-between py-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Enable Free Tier
                  </h3>
                  <p className="text-sm text-gray-600">
                    Enable free tier features for users not on a paid plan.
                  </p>
                </div>
                <Toggle enabled={enableFreeTier} onChange={setEnableFreeTier} />
              </div>

              {/* Data Retention */}
              <div className="flex items-center justify-between py-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Data Retention
                  </h3>
                  <p className="text-sm text-gray-600">
                    Enable data retention by CodeRabbit if disabled, we will not
                    collect any data for your Knowledge Base, nor will we cache
                    any code or data between reviews. We recommend allowing data
                    retention, as it improves and speeds up your reviews.
                  </p>
                </div>
                <Toggle enabled={dataRetention} onChange={setDataRetention} />
              </div>
            </>
          )}

          {activeTab !== "review" && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">
                {tabs.find((tab) => tab.id === activeTab)?.label} Settings
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Configuration options for this section will be available here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizationSettings;
