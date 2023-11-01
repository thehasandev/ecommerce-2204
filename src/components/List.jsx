import React from 'react'

function List({text,side,drop,className}) {
  return (
    <li className={`font-dm    ${side? "text-gray hover:text-primary font-bold mb-5 text-sm":drop ? "text-white text-center text-sm py-2 border-b border-solid border-offwhite/20 ": "text-gray sm:text-sm text-xs font-bold hover:text-primary"} ${className}`}>{text}</li>
  )
}

export default List