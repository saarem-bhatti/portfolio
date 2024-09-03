import React from 'react'
import { Container } from 'react-bootstrap'
import BottomSection from '../components/Home/BottomSection'
import TopSection from '../components/Home/TopSection'
import Particle from '../components/Particle'
import '../styles/Home.css'

function Home() {
  return (
    <section>
      <Container fluid className='home-container' id='home'>
        <Particle />
        <TopSection />
        <BottomSection />
      </Container>
    </section>
  )
}

export default Home
