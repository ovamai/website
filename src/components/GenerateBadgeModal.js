// components/GenerateBadgeModal.js
import React from "react";

const GenerateBadgeModal = ({ isOpen, onClose, repoName }) => {
  if (!isOpen) return null;

  const badgeURL = `https://img.shields.io/coderabbit/reviews/${repoName}`;
  const markdownSnippet = `![CodeRabbit Pull Request Reviews](${badgeURL})`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-xl w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Generate Badge</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Consider adding the "OvamAi Pull Request Reviews" badge to your
          repository to showcase automated pull request reviews. Copy the
          snippet below and paste it into your README.md file.
        </p>

        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-black text-white text-xs px-2 py-1 rounded">
            CodeRabbit Reviews
          </span>
          <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded">
            0
          </span>
        </div>

        <div className="bg-gray-100 text-sm p-2 rounded flex justify-between items-center">
          <code className="break-all">{markdownSnippet}</code>
          <button
            className="ml-2 text-blue-600 hover:text-blue-800 text-sm"
            onClick={() => {
              navigator.clipboard.writeText(markdownSnippet);
            }}
          >
            📋
          </button>
        </div>

        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateBadgeModal;
