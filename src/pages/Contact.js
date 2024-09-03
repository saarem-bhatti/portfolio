import { Container } from 'react-bootstrap'
import AlternativeContact from '../components/Contact/AlternativeContact'
import ContactForm from '../components/Contact/ContactForm'
import Particle from '../components/Particle'
import '../styles/Contact.css'

function Contact() {
  return (
    <Container fluid className='contact-container'>
      <Container>
        <ContactForm />
        <AlternativeContact />
      </Container>

      <Particle />
    </Container>
  )
}

export default Contact
