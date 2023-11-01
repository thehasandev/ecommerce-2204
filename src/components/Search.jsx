import React from 'react'

import {AiOutlineSearch} from "react-icons/ai"

function Search({className,placeholder}) {
  return (
    <div className={`w-full relative `}>
    <input type="text" className={`w-full md:px-5 pl-2 pr-5 placeholder:text-dm placeholder:text-xs md:placeholder:text-base py-2 md:py-4 ${className}`} placeholder={`${placeholder}`}/>
    <AiOutlineSearch  className='absolute top-1/2 right-1 md:right-4 -translate-y-1/2 text-lg md:text-2xl'/>
   </div>
  )
}

export default Search