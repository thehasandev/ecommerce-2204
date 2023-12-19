import React from 'react'

import { Link } from 'react-router-dom'

import Container from '../Container'
import Flex from '../Flex'
import Image from "../Image"
import List from "../List"
import Searchbar from "../layouts/Searchbar"

import Logo from "../../assets/logo.png"

import { useDispatch } from 'react-redux'
import { bradcrumb } from '../../slices/bratcrumbSlice'



function Navbar() {
  let dispatch = useDispatch()

  let handleNameClick = (name) => {
    dispatch(bradcrumb(name))
  }

  return (
    <>
      <nav className='py-8 hidden lg:block'>
        <Container>
          <Flex>

            <div className='w-1/5'>
              <Image src={Logo} />
            </div>

            <Flex className='w-4/5 justify-end'>
              <div className='hidden md:block'>
                <ul className='flex gap-x-10 '>

                  <Link onClick={() => { handleNameClick("Home") }} to="/">
                    <List text="Home" />
                  </Link>

                  <Link onClick={() => { handleNameClick("Shop") }} to="/shop">
                    <List text="Shop" />
                  </Link>

                  <Link onClick={() => { handleNameClick("About") }} to="/about">
                    <List text="About" />
                  </Link>

                  <Link onClick={() => { handleNameClick("Contact") }} to="/contact">
                    <List text="Contacts" />
                  </Link>
                  <List text="Journal" />
                </ul>

              </div>
            </Flex>
          </Flex>
        </Container>
      </nav>
      <Searchbar />
    </>
  )
}

export default Navbar