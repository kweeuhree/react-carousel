import React from 'react'

const Button = ({ action, type }) => {
  return (
    <div className="button-container" onClick={action}>
        <div className='action-button' >{type}</div>
    </div>
  )
}

export default Button;