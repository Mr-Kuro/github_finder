import { useState } from "react";
import { Search } from "../components";
import { UserProps } from "../types";
import {User} from "../components"
import {Error} from "../components"
import { errorDescription } from '../components/error/Error';
import { errorStyle } from '../components/error/Error';

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<errorDescription[] | false>(false);
  
  const loadUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (res.status === 404) {
      setUser(null);
      setError([{mensagem: "Usuário não encontrado!", status: 404}]);
      return;
    } else {
      setError(false);
    }

    const { avatar_url, login, location, followers, following, }: UserProps = data

    setUser({
      avatar_url,
      login,
      location,
      followers,
      following,
    }
    );
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user}/>}
      {error && <div style={errorStyle}><Error descriptions={error} styled={true}/></div>}
    </div>
  );
}

export default Home;