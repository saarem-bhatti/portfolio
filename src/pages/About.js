import React from 'react'
import { Container } from 'react-bootstrap'
import AboutMe from '../components/About/AboutMe'
import Github from '../components/About/Github'
import Techstack from '../components/About/Techstack'
import Particle from '../components/Particle'
import '../styles/About.css'

function About() {
  return (
    <Container fluid className='about-container'>
      <Particle />

      <Container>
        <AboutMe />
        <Techstack />
        <Github />
      </Container>
    </Container>
  )
}

export default About
