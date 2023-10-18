
import React from 'react'

import RightArrow from './Icon/RightArrow'

function NextSlide(props) {
  const {onClick} = props
  return (
    <div
    className={` w-16 h-16 rounded-full flex justify-center items-center bg-[#979797] ${props.class}`}
    onClick={onClick}
    
  >
    <RightArrow/>
  </div>
  )
}

export default NextSlide