type SearchProps = {
  loadUser: (username: string) => Promise<void>;
}

import styles from './Search.module.css'

import { BsSearch } from 'react-icons/bs'
import { useState, KeyboardEvent } from 'react'


function Search({ loadUser }: SearchProps) {
  const [username, setUsername] = useState('');

  const handleKeyup = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(username)
    }
  }

  return (
    <div className={styles.search}>
      <h2>Busque por usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={styles.search_container}>
        <input type="text" placeholder='Digite o nomome do usuário' onChange={(e) => setUsername(e.target.value)} onKeyUp={handleKeyup} autoFocus/>
        <button onClick={() => loadUser(username)}>
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search