import { LogOut } from "lucide-react";

function Logout() {
  const handleLogout = () => {
    const provider = localStorage.getItem("oauthProvider");

    // Remove tokens
    localStorage.removeItem("oauthToken");
    localStorage.removeItem("oauthProvider");
    localStorage.removeItem("ovamToken");

   switch (provider) {
    case 'github':
      window.open('https://github.com/logout', '_blank');
      break;
    case 'gitlab':
      window.open('https://gitlab.com', '_blank'); // can't log out directly
      break;
    case 'bitbucket':
      window.open('https://bitbucket.org/account/settings/', '_blank'); // manual logout
      break;
    case 'azure':
      localStorage.removeItem('oauthToken');
  localStorage.removeItem('ovamToken');
  localStorage.removeItem('oauthProvider');

      window.location.href = 'https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=http://localhost:3000/';
      return; // skip alert and redirect below since we're navigating away
    default:
      break;
  }

  // Disable back button caching
window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
  window.location.href = '/login';
};

  alert("You have been logged out from the app. Please logout manually from the provider if needed.");
  window.location.href = '/login';





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
