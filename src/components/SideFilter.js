import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  FolderOpen,
  BarChart3,
  Puzzle,
  FileText,
  GraduationCap,
  Settings,
  Wrench,
  Key,
  CreditCard,
  Gift,
  BookOpen,
  HelpCircle,
  Github,
} from "lucide-react";
import { jwtDecode } from "jwt-decode";
import Logout from "./Logout";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const [user, setUser] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const { pathname, search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const tokenFromURL = params.get("token");
    const accessTokenFromURL = params.get("accessToken");
    const providerFromURL = params.get("provider");

    if (tokenFromURL) {
      localStorage.setItem("ovamToken", tokenFromURL);
    }
    if (accessTokenFromURL && providerFromURL) {
      localStorage.setItem("oauthToken", accessTokenFromURL);
      localStorage.setItem("oauthProvider", providerFromURL);
    }

    const token = tokenFromURL || localStorage.getItem("ovamToken");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded?.name) setUser(decoded.name);
        if (decoded?.avatar) setProfileImage(decoded.avatar);
      } catch (err) {
        console.error("❌ Invalid token");
        localStorage.removeItem("ovamToken");
      }
    }
  }, [search]);

  const linkClass = (path) =>
    `flex gap-2 items-center px-3 py-2 rounded hover:bg-gray-100 transition-colors text-sm ${
      pathname === path
        ? "text-blue-600 font-semibold bg-gray-100"
        : "text-gray-700"
    }`;

  const menuItems = [
    { id: "repositories", label: "Repositories", icon: FolderOpen },
    { id: "", label: "Dashboard", icon: BarChart3 },
    { id: "integrations", label: "Integrations", icon: Puzzle },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "learnings", label: "Learnings", icon: GraduationCap },
  ];

  const settingsItems = [
    { id: "configuration", label: "Configuration", icon: Wrench },
    { id: "api-keys", label: "API Keys", icon: Key },
  ];

  const bottomItems = [
    { id: "subscription", label: "Subscription", icon: CreditCard },
    { id: "refer", label: "Refer and Earn", icon: Gift },
    { id: "docs", label: "Docs", icon: BookOpen },
    { id: "support", label: "Support", icon: HelpCircle },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Github size={20} />
        <div className="flex-1">
          <div className="font-semibold text-sm text-gray-700">
            {user || "User"}
          </div>
          <div className="text-xs text-gray-500">Organization</div>
        </div>
        <ChevronDown size={16} className="text-gray-500" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <Link to={`/${id}`} key={id} className={linkClass(`/${id}`)}>
            <Icon size={16} />
            {label}
          </Link>
        ))}

        <button
          onClick={() => setSettingsExpanded(!settingsExpanded)}
          className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-700"
        >
          <span className="flex items-center gap-2">
            <Settings size={16} /> Organization Settings
          </span>
          <ChevronRight
            size={16}
            className={`transition-transform ${
              settingsExpanded ? "rotate-90" : ""
            }`}
          />
        </button>

        {settingsExpanded && (
          <div className="pl-5 flex flex-col gap-2">
            {settingsItems.map(({ id, label, icon: Icon }) => (
              <Link to={`/${id}`} key={id} className={linkClass(`/${id}`)}>
                <Icon size={16} />
                {label}
              </Link>
            ))}
          </div>
        )}

        {bottomItems.map(({ id, label, icon: Icon }) => (
          <Link to={`/${id}`} key={id} className={linkClass(`/${id}`)}>
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-10 pt-4 border-t flex items-center gap-3">
        {profileImage ? (
          <img
            src={profileImage}
            alt="not-found"
            className="w-8 h-8 rounded-full object-cover mb-1"
          />
        ) : (
          <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full text-sm font-medium">
            {(user && user[0]?.toUpperCase()) || "U"}
          </div>
        )}
        <div className="flex justify-between align-middle flex-1">
          <div>
            <div className="text-sm font-semibold">{user || "User"}</div>
            <div className="text-xs text-gray-500">role</div>
          </div>
          <button>
            <Logout />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
