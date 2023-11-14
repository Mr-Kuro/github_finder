import React from 'react'

function Error({ msg }: any) {
  const renderError = () => {
    const error_style: React.CSSProperties = {
      padding: '0px',
      margin: '0px',
      color: 'red',
      display: 'flex',
    }

    if (msg) {
      return (
        <div>
          <p style={error_style}>{msg}</p>
        </div>
      )
    }
    return <p style={error_style}>Usuário não encontrado<br/> 404</p>
  }

  return (
    renderError()
  )
}

export default Error