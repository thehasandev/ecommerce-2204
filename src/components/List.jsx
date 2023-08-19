import React from 'react'

function List({text,className}) {
  return (
    <li className={`font-dm font-normal text-sm hover:text-primary ${className}`}>{text}</li>
  )
}

export default List