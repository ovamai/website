import React from "react";

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Integrations</h1>
        <p className="text-sm text-gray-600 mt-1">
          If you use one of these services, we recommend integrating them with
          CodeRabbit. This will allow CodeRabbit to use the context from the
          linked issues while reviewing the code. New workflow integrations are
          in progress and will be added upon availability.
        </p>
      </div>
    </div>
  );
};

export default Header;
