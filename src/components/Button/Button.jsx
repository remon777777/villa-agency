import React from 'react'
import './Button.css'
const Button = ({ title , cName , buttonUrl}) => {
  return (
    <div id='button' className={cName} >
      <a href={buttonUrl}>{title}</a>
    </div>
  )
}

export default Button