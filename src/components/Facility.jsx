import React from 'react'
import Flex from './Flex'
import Image from './Image'

function Facility({src,alt,title,size,className}) {
  return (
    <>
      <Flex className="lg:gap-x-4 gap-x-2 items-center flex-col justify-center lg:flex-row">
          <Image className={`mb-2 lg:mb-0 ${size}`} src={src} alt={alt}/>
          <p className={`font-dm font-normal  text-xs lg:text-base text-center text-secondary ${className}`}>{title}</p>
      </Flex>
    </>
  )
}

export default Facility