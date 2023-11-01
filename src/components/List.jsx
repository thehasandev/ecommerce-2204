import React from 'react'

function List({text,side,className}) {
  return (
    <li className={`font-dm font-bold   ${side? "text-gray hover:text-primary mb-5 text-sm":"text-gray sm:text-sm text-xs  hover:text-primary"} ${className}`}>{text}</li>
  )
}

export default List