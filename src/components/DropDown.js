import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const menuRef = useRef(null); // ✅ Remove TypeScript annotation
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 border px-3 py-1 rounded text-sm"
      >
        Organization Settings
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-lg">
          <ul className="text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to="/organizationSettingConfig">Configuration</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to="/apiKey">API Keys</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
