import React, { useRef } from 'react'

import List from './List'


function DropDown() {
    let dropRef = useRef(null)

    let handleDrop =(e)=>{

     if(e.target.className == "btnDrop"){
      if(dropRef.current.style.display=="none"){
            dropRef.current.style.display="block"
        }else{
            if(!dropRef.current.contains(e.target)){     
            dropRef.current.style.display="none"
            }
        }
        }else{
            dropRef.current.style.display="none"
        }
    
    }

  return (
    <div onClick={handleDrop}>
         <button className='btnDrop'>Drop</button>
          <div ref={dropRef} className=''>
            <ul className='bg-red-500 w-[120px] text-center'>
                <List text="Menu"/>
                <List text="Menu"/>
                <List text="Menu"/>
                <List text="Menu"/>
            </ul>
          </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quis.0 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam ullam libero assumenda praesentium ut minima pariatur iste dolorem eos, iure accusantium perspiciatis facilis beatae repellat. Laudantium assumenda animi provident dolorum magni harum in fuga alias optio molestiae architecto saepe aliquam dolore ab, quidem unde. Dolore rem, aperiam et officia distinctio impedit perferendis asperiores omnis architecto temporibus expedita facilis modi aliquid eligendi vero ipsa ut odit deserunt laborum placeat consequatur? Saepe earum ipsa nulla possimus repudiandae eum quae assumenda soluta doloremque libero amet, voluptas, esse enim doloribus itaque! Modi molestias assumenda fuga sint non, ab rerum laborum facere labore magnam!</p>
    </div>
  )
}

export default DropDown