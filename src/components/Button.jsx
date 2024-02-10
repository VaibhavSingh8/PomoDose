import React from 'react'

const Button = ({ title = '', className = '', callBack }) => {
  return (
    <button className={className} onClick={callBack}>{title}</button>
  )
}

export default Button