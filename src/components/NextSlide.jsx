
import React from 'react'

import RightArrow from './Icon/RightArrow'

function NextSlide(props) {
  const {onClick} = props
  return (
    <div
    className={` lg:w-16 lg:h-16 w-8 h-8 rounded-[5px] lg:rounded-full flex justify-center items-center bg-[#979797] ${props.class}`}
    onClick={onClick}
    
  >
    <RightArrow/>
  </div>
  )
}

export default NextSlide