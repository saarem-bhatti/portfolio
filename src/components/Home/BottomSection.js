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
          <p className='bottom-body' style={{ marginLeft: '5px', marginRight: '10px' }}>
          In today’s data-driven world, businesses have access to more information than ever, yet 
          many still struggle to translate that data into actionable solutions. The complexity
          increases when these challenges span multiple functions, making it difficult to pinpoint
          the root cause and determine the best course of action. That’s where I come in.
          </p>

          {/* Paragraph 2 */}
          <p className='bottom-body' style={{ marginLeft: '5px', marginRight: '10px' }}>
          With over six years of experience in finance, reporting, and analytics, I specialize in
          navigating these complexities by transforming data into strategic insights that solve real
          business problems. I excel at cross-functional collaboration in order to identify issues
          and deliver data-backed solutions that align with business goals. My approach goes beyond
          just the numbers. I am passionate about understanding customer needs and delivering
          solutions that truly make an impact. I engage with stakeholders across departments to
          ensure every perspective is considered, embracing diverse viewpoints and fostering an
          inclusive environment that drives innovation. By leveraging my blend of technical
          expertise, business acumen, and data storytelling skills, I help organizations turn
          value across organizations.insights into decisions that deliver meaningful results. I am
          committed to a Growth Mindset—continuously learning, adapting, and seeking innovative
          approaches to overcome challenges. With a focus on collaboration and making a difference,
          I help drive impactful solutions that create value across organizations.
          </p>

          {/* Paragraph 3 */}
          <p className='bottom-body' style={{ marginLeft: '5px', marginRight: '10px' }}>
          If your company is facing challenges that require a strategic, data-driven approach, I am
          ready to help you find the solutions you need.
          </p>
        </Col>

        {/* Profile picture section */}
        <Col md={4} className='bottom-img' style={{ alignSelf: 'center'}}>
          <Tilt>
            <img src={profilePicture} className='img-fluid' alt='profilePicture' />
          </Tilt>
        </Col>
      </Row>
    </Container>
  )
}
export default Introduction
