import { useState } from "react";
import { Search } from "../components";
import { UserProps } from "../types";
import {User} from "../components"
import {Error} from "../components"
const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const errorStyle: React.CSSProperties = {
    display: 'flex',
    flexFlow: 'row nowrap',

    alignItems: 'center',
    justifyContent: 'center',

    borderLeft: '1px solid red',
    padding: '0 0 0 1rem',
    margin: '0 0 1rem 0',
  };
  
  const loadUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (res.status === 404) {
      setUser(null);
      setError(true);
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
      {error && <div style={errorStyle}><Error msg=''/></div>}
    </div>
  );
}

export default Home;