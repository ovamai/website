import React from "react";

const Toggle = ({ enabled, onChange, size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-4",
    md: "w-10 h-5",
  };

  const thumbClasses = {
    sm: "w-3 h-3 translate-x-0.5",
    md: "w-4 h-4 translate-x-0.5",
  };

  const thumbTransformClasses = {
    sm: "translate-x-4",
    md: "translate-x-5",
  };

  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
        enabled ? "bg-orange-500" : "bg-gray-200"
      } ${sizeClasses[size]}`}
    >
      <span
        className={`inline-block rounded-full bg-white transition-transform ${
          thumbClasses[size]
        } ${enabled ? thumbTransformClasses[size] : ""}`}
      />
    </button>
  );
};

export default Toggle;
