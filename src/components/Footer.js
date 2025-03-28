import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaLinkedinIn } from 'react-icons/fa'
import '../styles/Footer.css'

function Footer() {
  let date = new Date()
  let year = date.getFullYear()

  return (
    <Container fluid className='footer'>
      <Row>
        {/* Credit */}
        <Col md='4' className='footer-copywright'>
          <h3>Credit to Soumyajit Behera for Template</h3>
        </Col>

        {/* Copyright */}
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year}</h3>
        </Col>

        {/* Social Icons */}
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            {/* LinkedIn */}
            <li className='social-icons'>
              <a
                href='https://www.linkedin.com/in/saarembhatti11/'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
