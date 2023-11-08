import React from 'react'

function Error({ msg }: any) {
  const renderError = () => {
    const error_style: React.CSSProperties = {
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
    return <p style={error_style}>Usuário não encontrado! 404</p>
  }

  return (
    renderError()
  )
}

export default Error