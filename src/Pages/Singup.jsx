import React from 'react'

import Container from '../components/Container'

function Singup() {
  return (
    <div>
       <Container>
           <h2 className='font-dm font-bold text-text49 text-primary'>Sing up</h2>
            <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase'>{window.location.pathname.replace("/"," ").replace("-"," ")}</p>
       </Container>
    </div>
  )
}

export default Singup