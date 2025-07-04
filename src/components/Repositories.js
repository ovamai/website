import { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import SideFilter from "./SideFilter";
import GenerateBadgeModal from "./GenerateBadgeModal";
import RepositorySettings from "./RepoSettingsPage";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [error, setError] = useState(null);
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const [badgeRepo, setBadgeRepo] = useState("");

  const accessToken = localStorage.getItem("oauthToken");
  const provider = localStorage.getItem("oauthProvider");

  useEffect(() => {
    if (!accessToken || !provider) {
      console.warn("Missing OAuth token or provider");
      return;
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const fetchRepos = async () => {
      let allRepos = [];
      setError(null);

      try {
        if (provider === "github") {
          headers.Accept = "application/vnd.github+json";
          let page = 1;
          let hasNext = true;

          while (hasNext) {
            const res = await fetch(
              `https://api.github.com/user/repos?per_page=100&page=${page}`,
              { headers }
            );

            if (!res.ok) {
              throw new Error(`GitHub API error: ${res.status}`);
            }

            const data = await res.json();
            if (!Array.isArray(data))
              throw new Error("Invalid GitHub response");

            allRepos.push(
              ...data.map((repo) => ({
                name: `${repo.owner.login}/${repo.name}`,
                public: !repo.private,
              }))
            );

            hasNext = data.length === 100;
            page++;
          }
        }

        setRepositories(allRepos);
      } catch (err) {
        console.error("❌ Failed to fetch repositories:", err);
        setError(
          "Failed to fetch repositories. Please check your token or network."
        );
      }
    };

    fetchRepos();
  }, [accessToken, provider]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredRepos = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRepos.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedRepos = filteredRepos.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <SideFilter />
      <main className="flex-1 p-8 overflow-auto">
        {selectedRepo ? (
          <RepositorySettings
            token={accessToken}
            repoName={selectedRepo}
            onBack={() => setSelectedRepo(null)}
          />
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-semibold">Repositories</h1>
                <p className="text-sm text-gray-500">
                  List of repositories accessible to OvamAI.
                </p>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm">
                + Add Repositories
              </button>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Repo not found? Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
              />
            </div>

            <div className="flex justify-between text-sm font-medium text-gray-500 border-b py-2 px-2">
              <span>REPOSITORY</span>
              <span>ACTIONS</span>
            </div>

            {error ? (
              <div className="text-red-500 text-sm mt-4">{error}</div>
            ) : paginatedRepos.length === 0 ? (
              <h1 className="mt-4 text-gray-500 text-sm">
                No Repositories Found
              </h1>
            ) : (
              <>
                <ul className="divide-y">
                  {paginatedRepos.map((repo, index) => (
                    <li
                      key={index}
                      className="group flex justify-between items-center py-3 px-2 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <div className="flex items-center gap-2 w-1/2 min-w-[200px]">
                        <span className="text-sm font-medium text-gray-900">
                          {repo.name.split("/")[1]}
                        </span>
                        {repo.public? (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                            Public
                          </span>
                        ):
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                            Private
                          </span>
                        
                        
                        }
                      </div>

                      <div className="flex items-center gap-2 w-1/3">
                           <button
                          className="hidden group-hover:inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-white border mr-5 border-gray-200 rounded-full shadow-sm hover:bg-gray-100 transition"
                          onClick={() => {
                            setBadgeRepo(repo.name);
                            setShowBadgeModal(true);
                          }}
                        >
                          Generate Badge
                        </button>

                      </div>

                      <div className="flex justify-end items-center space-x-3 w-1/6 ">
                     
                        <button onClick={() => setSelectedRepo(repo.name)}>
                          <Settings className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
                        </button>
                      </div>



                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span>Rows per page</span>
                    <select
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                      value={rowsPerPage}
                      onChange={(e) => setRowsPerPage(Number(e.target.value))}
                    >
                      <option value={6}>6</option>
                      <option value={12}>12</option>
                      <option value={24}>24</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      className="px-2 py-1 text-gray-400 hover:text-gray-600"
                      onClick={() => setCurrentPage(1)}
                      disabled={currentPage === 1}
                    >
                      &laquo;
                    </button>
                    <button
                      className="px-2 py-1 text-gray-600"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                    >
                      ‹
                    </button>
                    <button
                      className="px-2 py-1 text-gray-600"
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                    >
                      ›
                    </button>
                    <button
                      className="px-2 py-1 text-gray-400 hover:text-gray-600"
                      onClick={() => setCurrentPage(totalPages)}
                      disabled={currentPage === totalPages}
                    >
                      &raquo;
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
        <GenerateBadgeModal
          isOpen={showBadgeModal}
          onClose={() => setShowBadgeModal(false)}
          repoName={badgeRepo}
        />
      </main>
    </div>
  );
};

export default Repositories;
