import { UserProps } from "../../types"

import { MdLocationPin } from 'react-icons/md'
import { Link } from "react-router-dom"
import styles from './User.module.css'

function User({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) {
  return (
    <div className={styles.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={styles.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={styles.status}>
        <div>
          <p className={styles.number}>Seguidores:
            <p>{followers}</p>
          </p>
        </div>
        <div>
          <p className={styles.number}>Seguindo:
            <p>{following}</p>
          </p>
        </div>
      </div>
      <Link to={`${login}/repos`}>Ver melhores projetos</Link>
    </div>
  )
}

export default User