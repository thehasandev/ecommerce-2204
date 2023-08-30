import React from 'react'

function Input({text,placeholder,type}) {
  return (
    <div>
        <h4 className='font-dm font-bold text-base pb-2'>{text}</h4>
        <input type={type} className=' w-full border-b border-offwhite py-5 px-5 mb-2  placeholder:text-sm placeholder:font-dm' placeholder={placeholder} />
    </div>
  )
}

export default Input