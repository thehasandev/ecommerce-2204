import React from 'react'
import Flex from './Flex'
import Image from './Image'

function Facility({src,alt,title}) {
  return (
    <>
      <Flex className="gap-x-4 items-center">
          <Image src={src} alt={alt}/>
          <p className='font-dm font-normal text-base text-secondary'>{title}</p>
      </Flex>
    </>
  )
}

export default Facility