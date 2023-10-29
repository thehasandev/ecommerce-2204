import React from 'react'

function List({text,side,className}) {
  return (
    <li className={`font-dm font-bold text-sm  ${side? "text-gray hover:text-primary mb-5":"text-gray  hover:text-primary"} ${className}`}>{text}</li>
  )
}

export default List