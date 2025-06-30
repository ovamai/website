import { useEffect, useState } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("oauthToken");
  const provider = localStorage.getItem("oauthProvider");

  useEffect(() => {
    const fetchRepos = async () => {
      let allRepos = [];
      setError(null);

      if (!accessToken || !provider) return;

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

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

            if (!res.ok) throw new Error("GitHub API error");

            const data = await res.json();
            if (!Array.isArray(data)) throw new Error("Invalid response");

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
        console.error(err);
        setError("Failed to fetch repositories.");
      }
    };

    fetchRepos();
  }, [accessToken, provider]);

  return { repositories, error };
};

export default useRepositories;
