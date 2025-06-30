import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Switch } from "react-router-dom";

// Local pages
// import PrivateRoute from "./components/PrivateRoute";

import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import Repositories from "./components/Repositories";
import Integrations from "./components/Integrations";
import Reports from "./components/Reports";
import Login from "./components/Login";
import SubscriptionPage from "./components/SubscriptionPage";
import OrganizationSettings from "./components/OrganizationSettings";
import ApiKeys from "./components/ApiKey";
import PrivateRoute from "./components/PrivateRoute";
import ConfigurationSettings from "./components/Configuration";
import LearningsPage from "./components/learnings";
import { Route, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const jwtToken = queryParams.get("token");
    const accessToken = queryParams.get("accessToken");
    const provider = queryParams.get("provider");

    if (jwtToken && accessToken && provider) {
      localStorage.setItem("ovamToken", jwtToken); // JWT for your backend
      localStorage.setItem("oauthToken", accessToken); // OAuth token for GitHub API
      localStorage.setItem("oauthProvider", provider);

      history.replace("/");
    }
  }, [location, history]);

  return (
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/repositories" component={Repositories} />
      <PrivateRoute path="/integrations" component={Integrations} />
      <PrivateRoute
        path="/organizationSettingConfig"
        component={OrganizationSettings}
      />
      <PrivateRoute path="/api-keys" component={ApiKeys} />
      <PrivateRoute path="/learnings" component={LearningsPage} />
      <PrivateRoute path="/reports" component={Reports} />
      <PrivateRoute path="/configuration" component={ConfigurationSettings} />
      <PrivateRoute path="/subscription" component={SubscriptionPage} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster richColors closeButton position="top-right" />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
