import React from 'react'
import Flex from './Flex'
import Image from './Image'

function Facility({src,alt,title}) {
  return (
    <>
      <Flex className="lg:gap-x-4 gap-x-2 items-center flex-col lg:flex-row justify-center">
          <Image src={src} alt={alt}/>
          <p className='font-dm font-normal  text-sm lg:text-base text-center text-secondary mt-2 lg:mt-0'>{title}</p>
      </Flex>
    </>
  )
}

export default Facility