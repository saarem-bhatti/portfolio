import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Tilt from 'react-parallax-tilt'
import profilePicture from '../../assets/profile.JPG'

/* Bottom component of the home section which consists of an introduction. */
function Introduction() {
  return (
    <Container fluid className='bottom-container' id='about'>
      <Row>
        {/* Text section */}
        <Col md={8} className='bottom-text'>
          {/* Title */}
          <h1 style={{ fontSize: '2.6em' }}>
            LET ME <span className='purple'> INTRODUCE </span> MYSELF
          </h1>

          {/* Paragraph 1 */}
          <p className='bottom-body'>
            Driven by a deep passion for technology and innovation, I am a Computer Science graduate
            from the <b className='purple' children='University of Toronto' /> with expertise in
            software engineering principles, full-stack development, and algorithm design. My
            technical background spans
            <b
              className='purple'
              children=' object-oriented, functional, and logical programming'
            />
            , allowing me to build scalable, efficient solutions for real-world challenges.
          </p>

          {/* Paragraph 2 */}
          <p className='bottom-body'>
            I’m eager to apply my software engineering and full-stack development expertise to a
            forward-thinking team where I can continue to grow and make an impact. Let’s connect if
            you’re looking for someone passionate about building scalable, high-quality software
            solutions.
          </p>
        </Col>

        {/* Profile picture section */}
        <Col md={4} className='bottom-img'>
          <Tilt>
            <img src={profilePicture} className='img-fluid' alt='profilePicture' />
          </Tilt>
        </Col>
      </Row>
    </Container>
  )
}
export default Introduction
