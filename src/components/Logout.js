import { LogOut } from "lucide-react";

function Logout() {
  const handleLogout = () => {
    const provider = localStorage.getItem("oauthProvider");

    // Remove tokens
    localStorage.removeItem("oauthToken");
    localStorage.removeItem("oauthProvider");
    localStorage.removeItem("ovamToken");

    // Open provider-specific logout if applicable
    if (provider === "bitbucket") {
      window.open("https://id.atlassian.com/logout?", "_blank");
    } else if (provider === "github") {
      window.open("https://github.com/logout", "_blank");
    }

    // Redirect to login
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
