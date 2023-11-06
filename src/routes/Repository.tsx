
import { useState, useEffect } from "react";
import { RepositoryProps } from "../types";
import { useParams } from "react-router-dom";
import { ListData } from '../components/repository/index';

type UserParams = {
  username: string;
};

function Repository() {

  const username = useParams<UserParams>().username;

  const [repositories, setRepositories] = useState<RepositoryProps[]>();


  const loadRepositories = async () => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    let data = await res.json();
    data = data.map((repo: any) => {
      return {
        name: repo.name,
        full_name: repo.full_name,
        stargazers_count: repo.stargazers_count,
        topics: repo.topics,
        description: repo.description,
        language: repo.language,
        html_url: repo.html_url,
      }
    })
    setRepositories(data);
  }


  useEffect(() => {
    loadRepositories();
  },[])


  console.log(repositories);


  return (
    <div >
      <h2>{`Explore os repositórios do usuário: ${username}`}</h2>
      <ListData dados={repositories} />
    </div>
  );
}

export default Repository