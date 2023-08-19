
import React from 'react'

import RightArrow from './Icon/RightArrow'

function NextSlide({className,  onClick}) {
   
  return (
    <div
    className={`${className}  w-16 h-16 rounded-full flex justify-center items-center bg-[#979797]`}
    onClick={onClick}
  >
    <RightArrow/>
  </div>
  )
}

export default NextSlide