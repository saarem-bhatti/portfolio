import React from 'react'
import { Row } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

/* Component of the contact section which consists of alternative forms of communication. */
function AlternativeContact() {
  return (
    <Row style={{margin: "20px 0" }}>
        {/* Component Title */}
        <h1 classname="heading" children="OR" />
        <p>
          Feel free to <span className='purple'>connect </span>with me via:
        </p>
        
        {/* Contact Information */}
        <p>Email: <strong className="purple" children="saad.bhatti.cs@gmail.com"/></p>
        <p>Phone: <strong className="purple" children="+1 (781) 692-9561"/></p>

        {/* Social Media Icons */}
        <ul className='social-icons-container'>
          <li className='social-icons' style={{margin: "5px 10px"}}>
            <a
              href='https://github.com/saad-bhatti'
              target='_blank'
              rel='noreferrer'
              className='purple'
              children={<AiFillGithub />}
            />
          </li>

          <li className='social-icons' style={{margin: "5px 10px"}}>
            <a
              href='https://www.linkedin.com/in/saad-bhatti/'
              target='_blank'
              rel='noreferrer'
              className='purple'
              children={<FaLinkedinIn />}
            />
          </li>
        </ul>
    </Row>
  )
}

export default AlternativeContact
