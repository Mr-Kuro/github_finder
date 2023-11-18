import { Error } from '..'
import { RepositoryProps } from '../../types'
import styles from './ListData.module.css'
import { AiOutlineCode, AiOutlineStar, AiOutlineFork } from 'react-icons/ai'
import { TbFileDescription, TbError404 } from 'react-icons/tb'
import { GiBurningBook } from 'react-icons/gi'

function ListData({ repositories }: { repositories: RepositoryProps[]}) {
  const render_List_Or_Error = (data: string, type: string) => {
    if (!data) return (
      <div className={styles.error_li}>
        < TbError404 className={styles.icon_svg} /> <Error descriptions={[{mensagem: `${type} - not found`}]} styled={true} />
      </div>
    )

    const switchIconSVG = (type: string) => {
      switch (type) {
        case 'description':
          return <TbFileDescription className={styles.icon_svg} />;
        case 'language':
          return <AiOutlineCode className={styles.icon_svg} />;
        case 'stargazers_count':
          return <AiOutlineStar className={`${styles.icon_svg} ${styles.icon_svg_colored}`} />;
        case 'forks_count':
          return <AiOutlineFork className={`${styles.icon_svg} ${styles.icon_svg_colored}`} />;
      }
    }

    return (
      <li >
        <div className={styles.item_container}>
          <div >
            {switchIconSVG(type)}
          </div> <span>{data}</span>
        </div>
      </li>
    )
  }

  const renderData = () => {

    return repositories.map((repo: RepositoryProps) => {
      return (
        <ul className={styles.list} key={repo.full_name}>
          <h2 className={styles.list_title} >{repo.name}</h2>

          {render_List_Or_Error(repo.description, 'description')}
          {render_List_Or_Error(repo.language, 'language')}

          <div className={styles.stars_forks}>
            {render_List_Or_Error(repo.stargazers_count.toString(), 'stargazers_count')}
            {render_List_Or_Error(repo.forks_count.toString(), 'forks_count')}
          </div>

          <li className={styles.repository_button}>
            <div className={styles.item_container}>
              <a target='blank' href={repo.html_url}>
                <div>
                  <GiBurningBook className={styles.icon_svg} />
                  <span>
                    Repositório
                  </span>
                </div>
              </a>
            </div>
          </li>
        </ul>
      )
    })
  }

  return (
    <div className={styles.container}>
      {renderData()}
    </div>
  )
}

export default ListData