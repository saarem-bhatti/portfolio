import emailjs from 'emailjs-com'
import React, { useState } from 'react'
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap'

/* Component of the contact section which consists of a contact form. */
function ContactForm() {
  /* State to track form data */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  /* States related to toast notification */
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVariant, setToastVariant] = useState('success')

  /* Function to handle form input changes */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  /* Function to handle form submission */
  const handleSubmit = (e) => {
    // Prevent default form submission
    e.preventDefault()

    // Send email using EmailJS
    emailjs
      .send('service_xnw2w3e', 'template_1vebu3u', formData, 'Q5j2pPRH5AAY1mu-y')
      // Show toast notification on success or failure
      .then((response) => {
        setToastVariant('success')
        setToastMessage('Message sent successfully!')
        setShowToast(true)
      })
      .catch((error) => {
        setToastVariant('danger')
        setToastMessage('Failed to send message. Please try again later.')
        setShowToast(true)
      })

    // Clear the form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      {/* Component Title */}
      <h1 className='heading'>
        <strong className='purple' children='Contact' /> Form
      </h1>

      {/* Contact Form */}
      <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group className='form-section' controlId='formName'>
          <Form.Label className='form-label'>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className='form-section' controlId='formEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Subject */}
        <Form.Group className='form-section' controlId='formEmail'>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type='text'
            name='subject'
            placeholder='Enter the subject'
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Message */}
        <Form.Group className='form-section' controlId='formMessage'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            name='message'
            rows={3}
            placeholder='Enter your message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Submit button */}
        <Button variant='primary' type='submit' style={{ minWidth: '8%' }} children='Send' />
      </Form>

      {/* Toast notification */}
      <ToastContainer position='bottom-end' className='p-3'>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
          bg={toastVariant}
          className={toastVariant === 'success' ? 'toast-custom-success' : ''}
        >
          <Toast.Header children={<strong className='me-auto' children='Notification' />} />
          <Toast.Body children={toastMessage} />
        </Toast>
      </ToastContainer>
    </>
  )
}

export default ContactForm
