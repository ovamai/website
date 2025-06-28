import { useState } from "react";
import {
  Settings as SettingsIcon,
  Users,
  Shield,
  CreditCard,
  Bell,
  Code,
  GitBranch,
  Lock,
  Globe,
  AlertCircle,
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  const sidebarItems = [
    { id: "general", label: "General", icon: SettingsIcon },
    { id: "access", label: "Member access", icon: Users },
    { id: "security", label: "Authentication security", icon: Shield },
    { id: "billing", label: "Billing and plans", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "repository", label: "Repository defaults", icon: Code },
    { id: "actions", label: "Actions General", icon: GitBranch },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">OA</span>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">ovam-ai</h2>
                <p className="text-sm text-gray-500">Organization</p>
              </div>
            </div>
          </div>

          <nav className="p-4">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-md transition-colors ${
                    activeTab === item.id
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">General</h1>
              <p className="text-gray-600">
                Manage your organization profile and preferences.
              </p>
            </div>

            <div className="space-y-8">
              {/* Organization Profile */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Organization profile</h2>

                <div className="space-y-6">
                  {[
                    { label: "Organization name", id: "org-name", value: "ovam-ai" },
                    { label: "Organization display name", id: "display-name", value: "Ovam AI" },
                    { label: "Website", id: "website", value: "" },
                    { label: "Location", id: "location", value: "" },
                  ].map(({ label, id, value }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block font-medium text-sm mb-1">{label}</label>
                      <input
                        id={id}
                        defaultValue={value}
                        className="w-full border border-gray-300 rounded-md p-2"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="description" className="block font-medium text-sm mb-1">Description</label>
                    <textarea
                      id="description"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Tell us about your organization"
                    />
                  </div>
                </div>

                <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Update profile</button>
              </div>

              {/* Repository Visibility */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Repository visibility</h2>
                <div className="space-y-4">
                  {[
                    {
                      id: "public",
                      label: "Public",
                      desc: "Anyone on the internet can see this repository. You choose who can commit.",
                      icon: <Globe className="w-4 h-4 text-gray-500" />,
                      defaultChecked: true,
                    },
                    {
                      id: "private",
                      label: "Private",
                      desc: "You choose who can see and commit to this repository.",
                      icon: <Lock className="w-4 h-4 text-gray-500" />,
                      defaultChecked: false,
                    },
                  ].map(({ id, label, desc, icon, defaultChecked }) => (
                    <div className="flex items-start space-x-3" key={id}>
                      <div className="flex items-center space-x-2 mt-1">
                        <input type="radio" name="visibility" defaultChecked={defaultChecked} className="w-4 h-4" />
                        {icon}
                      </div>
                      <div>
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-gray-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Member Privileges */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Member privileges</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Base permissions</p>
                      <p className="text-sm text-gray-600">
                        The permission that organization members have on organization repositories by default.
                      </p>
                    </div>
                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                      <option>Read</option>
                      <option>Write</option>
                      <option>Admin</option>
                    </select>
                  </div>

                  <hr className="my-4 border-gray-200" />

                  {[
                    {
                      label: "Repository creation",
                      desc: "Members can create repositories",
                      defaultChecked: true,
                    },
                    {
                      label: "Repository forking",
                      desc: "Members can fork repositories",
                      defaultChecked: true,
                    },
                    {
                      label: "Pages creation",
                      desc: "Members can create GitHub Pages sites",
                      defaultChecked: false,
                    },
                  ].map(({ label, desc, defaultChecked }, idx) => (
                    <div className="flex items-center justify-between" key={idx}>
                      <div>
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-gray-600">{desc}</p>
                      </div>
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-blue-600"
                        defaultChecked={defaultChecked}
                      />
                    </div>
                  ))}
                </div>
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Save</button>
              </div>

              {/* Danger Zone */}
              <div className="bg-white p-6 border border-red-200 rounded-lg shadow">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <h2 className="text-lg font-semibold text-red-700">Danger Zone</h2>
                </div>
                <div className="p-4 border border-red-200 rounded-md flex justify-between items-center">
                  <div>
                    <p className="font-medium text-red-700">Delete this organization</p>
                    <p className="text-sm text-red-600">
                      Once you delete an organization, there is no going back. Please be certain.
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                    Delete organization
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
