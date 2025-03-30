import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { BsGithub } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'

/* Component of the project section which creates a project card. */
function ProjectCards(props) {
  return (
    <Card className='project-card'>
      {/* Project image */}
      {props.imgPath && <Card.Img variant='top' src={props.imgPath} alt='card-img' />}

      {/* Card body */}
      <Card.Body>
        {/* Project title */}
        <Card.Title>{props.title}</Card.Title>

        {/* Project tech stack */}
        {props.techstack && (
          <Card.Text style={{ color: 'gray', marginBottom: '10px' }}>
            Tech Stack: {props.techstack.join(', ')} 
          </Card.Text>
        )}

        {/* Project description */}
        <Card.Text style={{ textAlign: 'justify' }} children={props.description} />

        {/* GitHub button */}
        {props.ghLink && (
          <Button variant='primary' href={props.ghLink} target='_blank'>
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}

        {/* Demo button */}
        {props.demoLink && (
          <Button
            variant='primary'
            href={props.demoLink}
            target='_blank'
            style={{ marginLeft: '10px' }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}
export default ProjectCards
