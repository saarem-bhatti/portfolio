import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import laptopImg from '../../assets/about.png'

/* Component of the about section which consists of an about me. */
function AboutMe() {
  return (
    <Row style={{ justifyContent: 'center', padding: '10px' }}>
      {/* About Me Text */}
      <Col md={7} className='about-me-text'>
        {/* About Me Title */}
        <h1 className='heading'>
          About <strong className='purple' children='ME' />
        </h1>

        {/* About Me Card */}
        <Card className='about-me-card'>
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <p style={{ textAlign: 'justify' }}>
                Hi there! I am Saad Mohy-Uddin Bhatti, a part-time Full-Stack Developer at a startup
                called Docical. Currently, I am seeking a full time Full-Stack Developer or Software
                Engineer role in Canada or the United States of America.
                <br />
                <br />
                Over the years, I’ve gained expertise and developed vital skills in various areas of
                sofware development, including (but not limited to):
                <ul>
                  <li className='about-me-item' children='data structures' />
                  <li className='about-me-item' children='algorithmic design' />
                  <li className='about-me-item' children='object-oriented programming' />
                  <li className='about-me-item' children='full-stack development' />
                  <li className='about-me-item' children='machine learning & data mining' />
                  <li className='about-me-item' children='database design and implementation' />
                  <li className='about-me-item' children='UI/UX' />
                </ul>
                Outside work, I enjoy spending time with my friends & family, playing story-rich
                video games, and experiencing different cultures around the world.
              </p>
            </blockquote>
          </Card.Body>
        </Card>
      </Col>

      {/* About Me Image */}
      <Col md={5} style={{ paddingTop: '120px', paddingBottom: '50px' }} className='about-me-img'>
        <img src={laptopImg} alt='about' className='img-fluid' />
      </Col>
    </Row>
  )
}

export default AboutMe
