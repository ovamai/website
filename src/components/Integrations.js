import React, { useState } from "react";
import SideFilter from "./SideFilter";

const integrations = [
  {
    name: "Jira",
    description: "Plan, track, and release great software.",
    details: "Using Jira Data Center (Self-Hosted)?",
    icon: "https://seeklogo.com/images/A/atlassian-jira-logo-C71F8C0324-seeklogo.com.png",
  },
  {
    name: "Linear",
    description: "Streamline software projects, sprints, and bug tracking.",
    icon: "https://assets.linear.app/icons/apple-touch-icon.png",
  },
  {
    name: "CircleCI",
    description:
      "Continuous Integration and Delivery Platform. Connect your CircleCI builds for enhanced PR analysis.",
    icon: "https://seeklogo.com/images/C/circleci-logo-F76840C2C7-seeklogo.com.png",
  },
];

const Integrations = () => {
  const [enabled, setEnabled] = useState([false, false, false]);

  const toggle = (i: number) => {
    const copy = [...enabled];
    copy[i] = !copy[i];
    setEnabled(copy);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <SideFilter />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-2">Integrations</h1>
        <p className="text-sm text-gray-600 max-w-2xl mb-6">
          If you use one of these services, we recommend integrating them with
          CodeRabbit. This will allow CodeRabbit to use the context from the
          linked issues while reviewing the code. New workflow integrations are
          in progress and will be added upon availability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="bg-white p-4 border rounded-lg flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <img
                    src={integration.icon}
                    alt={integration.name}
                    className="w-10 h-10 rounded-md object-contain bg-gray-100"
                  />
                  <div>
                    <h2 className="text-md font-semibold">
                      {integration.name}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {integration.description}
                    </p>
                    {integration.details && (
                      <p className="text-xs text-gray-500 mt-2">
                        {integration.details}
                      </p>
                    )}
                  </div>
                </div>
                {/* Toggle */}
                <label className="inline-flex items-center cursor-pointer ml-2">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={enabled[index]}
                    onChange={() => toggle(index)}
                  />
                  <div
                    className={`relative w-10 h-5 transition rounded-full ${
                      enabled[index] ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${
                        enabled[index] ? "translate-x-5" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Integrations;
