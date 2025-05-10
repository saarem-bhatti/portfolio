import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {
  AiOutlineContacts,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai'
import { GrGallery } from 'react-icons/gr'
import { CgFileDocument } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Navbar.css'

function NavBar() {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true)
    } else {
      updateNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollHandler)

  return (
    <Navbar expanded={expand} fixed='top' expand='md' className={navColour ? 'sticky' : 'navbar'}>
      <Container>
        {/* Home icon */}
        <Navbar.Brand as={Link} to='/' className='d-flex'>
          <img src={logo} className='img-fluid logo' alt='brand' />
        </Navbar.Brand>

        {/* Toggle for mobile view */}
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            updateExpanded(expand ? false : 'expanded')
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto' defaultActiveKey='#home'>
            {/* Home button */}
            <Nav.Item>
              <Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* Skills button */}
            <Nav.Item>
              <Nav.Link as={Link} to='/skills' onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: '2px' }} /> Skills
              </Nav.Link>
            </Nav.Item>

            {/* Projects button */}
            <Nav.Item>
              <Nav.Link as={Link} to='/project' onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> Projects
              </Nav.Link>
            </Nav.Item>

            {/* Gallery button */}
            <Nav.Item>
              <Nav.Link as={Link} to='/gallery' onClick={() => updateExpanded(false)}>
                <GrGallery style={{ marginBottom: '2px' }} /> Gallery
              </Nav.Link>
            </Nav.Item>

            {/* Resume button */}
            <Nav.Item>
              <Nav.Link as={Link} to='/resume' onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* Contact Form button */}
            <Nav.Item>
              <Nav.Link as={Link} to='/contact' onClick={() => updateExpanded(false)}>
                <AiOutlineContacts style={{ marginBottom: '2px' }} /> Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
