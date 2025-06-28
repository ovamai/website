import React, { useState } from "react";

const ToggleSwitch = ({ enabled, onToggle }) => (
  <label className="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only"
      checked={enabled}
      onChange={onToggle}
    />
    <div
      className={`w-11 h-6 rounded-full ${
        enabled ? "bg-orange-500" : "bg-gray-300"
      } relative transition-colors`}
    >
      <div
        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
          enabled ? "translate-x-5" : ""
        }`}
      />
    </div>
  </label>
);

const OptionGroup = ({ options, selected, onSelect }) => (
  <div className="flex space-x-2">
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onSelect(opt)}
        className={`px-3 py-1 border rounded ${
          selected === opt ? "bg-gray-100 font-semibold" : "text-gray-600"
        }`}
      >
        {opt}
      </button>
    ))}
  </div>
);

const KnowledgeBaseSettings = () => {
  const [optOut, setOptOut] = useState(false);
  const [webSearch, setWebSearch] = useState(true);
  const [learnings, setLearnings] = useState("Auto");
  const [guidelineEnforced, setGuidelineEnforced] = useState(true);
  const [filePatterns, setFilePatterns] = useState([]);
  const [issues, setIssues] = useState("Auto");
  const [jira, setJira] = useState("Auto");

  return (
    <div className="space-y-6 p-6 bg-white rounded-md shadow">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold mb-1">Opt Out</h3>
          <p className="text-sm text-gray-500 mb-2">
            Disable all knowledge base features that require data retention.
          </p>
        </div>

        <ToggleSwitch
          className="m-10"
          enabled={optOut}
          onToggle={() => setOptOut(!optOut)}
        />
      </div>

      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold mb-1">Web Search</h3>
          <p className="text-sm text-gray-500 mb-2">
            Enable the web search integration.
          </p>
        </div>

        <ToggleSwitch
          enabled={webSearch}
          onToggle={() => setWebSearch(!webSearch)}
        />
      </div>

      <div>
        <h3 className="font-semibold mb-1">Learnings</h3>
        <p className="text-sm text-gray-500 mb-2">
          Specify the scope of learnings to use for the knowledge base. 'local'
          uses the repository's learnings, 'global' uses the organization's
          learnings, and 'auto' uses repository's learnings for public
          repositories and organization's learnings for private repositories.{" "}
        </p>
        <OptionGroup
          options={["Local", "Global", "Auto"]}
          selected={learnings}
          onSelect={setLearnings}
        />
      </div>

      <div className="border-t pt-4">
        <h3 className="font-semibold mb-1">Code Guidelines</h3>
        <p className="text-sm text-gray-500 mb-2">
          CodeRabbit will analyse and learn from your organisation's code
          guidelines, which you can mention in the file patterns section. These
          guidelines will then be used to conduct thorough code reviews.{" "}
        </p>
        <div className="flex justify-between items-center mt-4 mb-2">
          <div>
            <h2>Enabled</h2>
            <p className="text-sm  text-gray-500">
              Enable CodeRabbit to enforce your organisation's coding standards
              during reviews.
            </p>
          </div>

          <ToggleSwitch
            enabled={guidelineEnforced}
            onToggle={() => setGuidelineEnforced(!guidelineEnforced)}
          />
        </div>

        <div>
          <h1>File Patterns</h1>
          <p className="text-sm text-gray-500">
            Specify files for your coding guideline documents in this section.
            CodeRabbit will scan these files to understand your team's standards
            and apply them during code reviews. Multiple files supported. File
            names are case-sensitive. Common files like: (**/.cursorrules,
            .github/copilot-instructions.md, **/CLAUDE.md, **/GEMINI.md,
            **/.cursor/rules/*, **/.windsurfrules, **/.clinerules/*,
            **/.rules/*, **/AGENT.md) are included by default.
          </p>
          <input
            type="text"
            placeholder="Press Enter to add file pattern"
            className="w-full border p-2 rounded"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim()) {
                setFilePatterns([...filePatterns, e.target.value.trim()]);
                e.target.value = "";
              }
            }}
          />
          <div className="mt-0 flex bg-gray-500 justify-between text-sm text-gray-400">
            <p className="p-1">Press Enter to add a new value</p>
            <button
              className="text-blue-500 border-black-700 mt-1 text-xs"
              onClick={() => setFilePatterns([])}
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="font-semibold mb-1">Issues</h3>
        <p className="text-sm text-gray-500 mb-2">
          Specify the scope of git platform (GitHub/GitLab) issues to use for
          the knowledge base. 'local' uses the repository's issues, 'global'
          uses the organization's issues, and 'auto' uses repository's issues
          for public repositories and organization's issues for private
          repositories.
        </p>
        <OptionGroup
          options={["Local", "Global", "Auto"]}
          selected={issues}
          onSelect={setIssues}
        />
      </div>

      <div className="pt-2">
        <h3 className="font-semibold mb-1">Jira</h3>
        <p className="text-sm text-gray-500 mb-2">
          Jira knowledge base integration for public repos.
        </p>
        <OptionGroup
          options={["Auto", "Enabled", "Disabled"]}
          selected={jira}
          onSelect={setJira}
        />
      </div>
    </div>
  );
};

export default KnowledgeBaseSettings;
