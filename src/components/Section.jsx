import React from 'react'

function Section({children,className}) {
  return (
    <div className={`${className}`}>{children}</div>
  )
}

export default Section