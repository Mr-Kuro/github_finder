import { useState, useEffect, useRef } from "react";
import { RepositoryProps } from "../types";
import { useParams } from "react-router-dom";
import { ListData } from '../components/repository/index';

type UserParams = {
  username: string;
};

function Repository() {

  const username = useParams<UserParams>().username;

  const [repositories, setRepositories] = useState<RepositoryProps[]>();

const isMounted = useRef(false);


  const loadRepositories = async () => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await res.json();
    const repositories: RepositoryProps[] = data.map((repo: any) => {
      return {
        name: repo.name,
        full_name: repo.full_name,
        stargazers_count: repo.stargazers_count,
        description: repo.description,
        language: repo.language,
        html_url: repo.html_url,
        forks_count: repo.forks_count,
      }
    })
    setRepositories(repositories);
  }



  useEffect(() => {
    isMounted.current = true;
    console.log('mounted');
    loadRepositories();
    return () => {
      console.log('unmounted');
      setRepositories([]);
      isMounted.current = false;
    }
  },[isMounted])


  return (
    <div >
      <h2>{`Explore os repositórios do usuário: ${username}`}</h2>
      <ListData repositories={repositories} />
    </div>
  );
}

export default Repository