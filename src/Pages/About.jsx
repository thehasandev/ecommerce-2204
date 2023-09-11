import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import {AiOutlineRight} from "react-icons/ai"

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function About() {
    let pageName =useSelector((state)=>state.bractcumb.previusName)

  return (
    <Container>
          <Flex className="items-center gap-x-2">
              <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase flex items-center gap-x-2'>
      
                <Link to={pageName=="Home" ? "/"  : `/${pageName}`}>
                  {pageName}
                </Link>
                
                <AiOutlineRight/>
              </p>
              <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase'>{window.location.pathname.replace("/"," ").replace("-"," ")}</p>
            
            </Flex>
    </Container>
  )
}

export default About