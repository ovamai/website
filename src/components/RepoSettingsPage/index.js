import React, { useState } from "react";
import ChatSettings from "./chat";
import CodeGenerationSettings from "./codeGeneration";
import FinishingTouches from "./review";
import General from "./general";
import KnowledgeBase from "./knowledgebase";
import { Link } from "react-router-dom";

const RepositorySettings = ({ repoName, onBack }) => {
  const [tab, setTab] = useState("General");

  const renderTab = () => {
    switch (tab) {
      case "General":
        return <General />;
      case "Review":
        return <FinishingTouches />;
      case "Chat":
        return <ChatSettings />;
      case "Knowledge Base":
        return <KnowledgeBase />;
      case "Code Generation":
        return <CodeGenerationSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-white min-h-screen max-w-screen-lg mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        <Link to="/repositories" className="text-gray-400">
          Repositories
        </Link>{" "}
        &gt;{" "}
        <span className="text-black font-medium">{repoName.split("/")[1]}</span>
      </div>

      {/* Repo name + Apply button */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-1">
            {repoName.split("/")[1]}
          </h2>
          <p className="text-sm text-gray-600">
            Repository settings are not configured. If you have a
            'coderabbit.yaml' file in your repository, its settings will take
            precedence and be used.
          </p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-sm px-4 py-2 rounded">
          Apply Changes
        </button>
      </div>

      {/* Use Org Settings toggle */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm text-gray-500 uppercase font-semibold mb-1">
              Use Organization Settings
            </h3>
            <p className="text-sm text-gray-600">
              Organization settings will be applied. If disabled, the
              repository-specific settings configured below will be used.
            </p>
          </div>

          {/* Styled toggle */}
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-300 peer-checked:bg-orange-500 rounded-full peer-focus:ring-2 peer-focus:ring-orange-400 transition-all duration-300 relative">
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5" />
            </div>
          </label>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-4 border-b border-gray-200">
        <nav className="flex space-x-4 text-sm">
          {[
            "General",
            "Review",
            "Chat",
            "Knowledge Base",
            "Code Generation",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`py-2 px-4 font-medium ${
                tab === item
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Render active tab */}
      {renderTab()}
    </div>
  );
};

export default RepositorySettings;
