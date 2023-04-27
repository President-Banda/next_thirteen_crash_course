import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye} from "react-icons/fa"

async function fetchRepos(){
  const response = await fetch('https://api.github.com/users/president-banda/repos');
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  // console.log(repos);
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repos-list">
        { repos.map((repo) => {
          <li key={ repo.id }>
            <Link href={repo.html_url}>
              <h3>
                { repo.name }
              </h3>
              <p>
                { repo.description }
              </p>
              <div className="repo-details">
                <span>
                  <FaStar />
                  { repo.stargazers_count }
                </span>
                <span>
                  <FaCodeBranch />
                  { repo.forks_count }
                </span>
                <span>
                  <FaEye />
                  { repos.watchers_count }
                </span>
              </div>
            </Link>
          </li>
        })}
        <li>

        </li>
      </ul>

    </div>
  )
}

export default ReposPage