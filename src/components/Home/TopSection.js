import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import homeLogo from '../../assets/home-main.svg'

/* Top component of the home section which consists of a greeting and interested roles. */
function TopSection() {
  return (
    <Container className='top-container' id='top-section'>
      <Row>
        <Col md={7} className='home-top'>
          {/* Greeting */}
          <h1 style={{ paddingBottom: 15 }} className='top-greeting'>
            Hi There! <span className='wave' role='img' aria-labelledby='wave' children='👋🏻' />
          </h1>

          {/* Name */}
          <h1 className='top-name'>
            I'M <strong className='main-name'> SAAD BHATTI</strong>
          </h1>

          {/* Roles */}
          <div style={{ padding: 50 }}>
            <Typewriter
              options={{
                strings: [
                  'Software Developer',
                  'Full Stack Developer',
                  'Machine Learning Enthusiast'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
              }}
            />
          </div>
        </Col>

        {/* Home logo */}
        <Col md={5} style={{ paddingBottom: 20 }}>
          <img src={homeLogo} alt='home pic' className='img-fluid' style={{ maxHeight: '450px' }} />
        </Col>
      </Row>
    </Container>
  )
}

export default TopSection
