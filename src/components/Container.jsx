import React from 'react'

function Container({children}) {
  return (
    <div className='max-[1600px]:max-w-container_xl  max-[1610px]:max-w-container  mx-auto'>{children}</div>
  )
}

export default Container