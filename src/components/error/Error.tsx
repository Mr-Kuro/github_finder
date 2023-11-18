import { MdOutlineReportGmailerrorred } from 'react-icons/md'
import styles from './Error.module.css'

export type errorDescription = {
  status?: number,
  mensagem: string
}
type ErrorProps = {
  descriptions: errorDescription[] | false,
  styled?: true
}

export const errorStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',

  borderTop: '1px solid red',
  borderLeft: '1px solid red',
  borderRadius: '1rem',
  padding: '3rem',
  margin: '1rem 0 0 0',
};

function Error({ descriptions, styled }: ErrorProps) {

  const renderError = () => {

    if (styled && descriptions) {
      const view = descriptions.map((description, index) => {
        return (
          <li key={index} className={styles.error}>
            <p className={styles.error_text}>{description.mensagem}</p>
            {description.status && <p className={styles.error_text}>{description.status}</p>}
          </li>
        )
      })

      return (
        <ul className={styles.error_list}>
          {view}
        </ul>
      )
    }

    if (descriptions) {
      const view = descriptions.map((description, index) => {
        return (
          <li key={index}>
            <p>{description.mensagem}</p>
            {description.status && <p>{description.status}</p>}
          </li>
        )
      })

      return (
        <ul>
          {view}
        </ul>
      )
    }


    return (
      <div className={styles.error}>
        <MdOutlineReportGmailerrorred />
        <p>
          Error 444
        </p>
        <p className={styles.error}>
          No Response
        </p>
      </div>
    )

  }

  return (
    renderError()
  )
}

export default Error