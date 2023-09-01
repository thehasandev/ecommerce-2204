import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Image from '../components/Image'
import Button from "../components/Button"

import ErrorImg from "../assets/error.png"
import Search from '../components/Search'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
       <Section className="py-20">
         <Container>
            <div>
               <Image src={ErrorImg} alt="error.png"/>
               <p className='font-dm font-normal text-base text-secondary max-w-664 my-12'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
               <div className='w-2/5'>
               <Search className="border border-secondary" placeholder="Type to search"/>
               
               <Link to="/">
               <Button text="Back to Home" hover/>
               </Link>

               </div>
            </div>
         </Container>
       </Section>
    </>
  )
}

export default Error