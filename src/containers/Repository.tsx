import { useState, useEffect } from "react";
import { RepositoryProps } from "../types";
import { useParams } from "react-router-dom";
import { ListData } from '../components/repository/index';
import Error, { errorDescription } from '../components/error/Error';
import { errorStyle } from '../components/error/Error';

type UserParams = {
  username: string;
};

function Repository() {

  const username = useParams<UserParams>().username;

  const [repositories, setRepositories] = useState<RepositoryProps[] | null>(null);

  const [error, setError] = useState<errorDescription[] | false>(false);

  const loadRepositories = async () => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);

    if (res.status === 404) {
      setError([{mensagem: 'Usuário não encontrado!', status: 404}]);
      return;
    } else {
      setError(false);
    }

    const data = await res.json();

    if (data.length === 0) {
      setError([{mensagem: 'Nenhum repositório encontrado', status: 404}]);
      return;
    } else {
      setError(false);
    }

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
    loadRepositories();
  },[])

  const componentitleStyle: React.CSSProperties = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem 0 0 0',
  };

  return (
    <div >
      <div style={componentitleStyle}>
        <h2>{`Explore os repositórios do`}</h2>
        <h3>{username}</h3>
      </div>
      {repositories && <ListData repositories={repositories} />}
      {error && <div style={errorStyle} ><Error {...{descriptions: error, styled: true}} /></div>}
    </div>
  );
}

export default Repository