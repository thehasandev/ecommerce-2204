import React from 'react'

function Badge({text,className}) {
  return (
    <button className={`text-sm font-dm font-bold text-white bg-primary py-2 px-8 absolute top-5 left-5 ${className}`}>{text}</button>
  )
}

export default Badge