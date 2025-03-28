import { Container, Row } from 'react-bootstrap'
import Particle from '../components/Particle'
import { FaLinkedinIn } from 'react-icons/fa'
import '../styles/Contact.css'

function Contact() {
  return (
    <Container fluid className='contact-container'>
      <Container>
        <Row style={{margin: "20px 0" }}>
          {/* Component Title */}
          <h1 classname="heading">
            Feel free to <span className='purple'>connect </span>with me via:
          </h1>
          
          {/* Contact Information */}
          <p>Email: <strong className="purple" children="saarem34@gmail.com"/></p>
          <p>Phone: <strong className="purple" children="+1 (508) 723-6974"/></p>

          {/* Social Media Icons */}
          <ul className='social-icons-container'>
            <li className='social-icons' style={{margin: "5px 10px"}}>
              <a
                href='https://www.linkedin.com/in/saarembhatti11/'
                target='_blank'
                rel='noreferrer'
                className='purple'
                children={<FaLinkedinIn />}
              />
            </li>
          </ul>
        </Row>
      </Container>

      <Particle />
    </Container>
  )
}

export default Contact
