import { Error } from '..'
import { RepositoryProps } from '../../types'
import styles from './ListData.module.css'

function ListData({ dados }: { dados: RepositoryProps[] | undefined }) {

  const renderData = () => {

    if (dados) {
      return dados?.map((repo: RepositoryProps) => {
        return (
          <ul className={styles.list}>
            <h2>{repo.name}</h2>
            <li>Nome completo:
              <p>{repo.full_name}</p>
            </li>

            {repo.description &&
              (
                <li>Descrição:
                  <p>{repo.description}</p>
                </li>
              )
            }

            <li>Estrelas:
              <p>{repo.stargazers_count || 0}</p>
            </li>

            {repo.language &&
              (
                <li>Linguagem mais utilizada:
                  <p>{repo.language}</p>
                </li>
              )
            }
            <li>
              <p><a target='blank' href={repo.html_url}> Ver Repositório</a></p>
            </li>
          </ul>
        )
      })
    } else {
      return (
        <Error />
      )
    }
  }

  return (
    <div className={styles.container}>
      {renderData()}
    </div>
  )
}

export default ListData