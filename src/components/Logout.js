import { LogOut } from "lucide-react";

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("oauthToken");
    localStorage.removeItem("oauthProvider");
    localStorage.removeItem("ovamToken");

    window.open("https://id.atlassian.com/logout?");

    alert(
      "You've been logged out from the app. Please logout from the new tab if needed."
    );
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 px-2 py-1 rounded transition-colors"
    >
      <LogOut size={18} />
      <span>Log Out</span>
    </button>
  );
}

export default Logout;
