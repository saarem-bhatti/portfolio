import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../components/Particle'
import ProjectCard from '../components/Projects/ProjectCard'
import '../styles/Projects.css'

function Projects() {
  const projects = [
    <ProjectCard
      title='Sales & Website Performance Dashboard'
      techstack={['PowerBI']}
      description='This dashboard was designed to help Marketing and Commercial teams monitor key
      trends in sales and website traffic at the customer level. It provides a clear view of growth
      and decline across accounts, highlights changes in how customers are accessing the website
      (e.g., device type, referral source), and connects these behavioral shifts to revenue
      performance. The dashboard supports strategic decision-making by surfacing actionable insights
      on customer engagement and conversion dynamics.'
    />
  ]

  return (
    <Container fluid className='project-container'>
      <Particle />

      <Container>
        {/* Component title and subtitle */}
        <h1 className='heading'>
          My Recent <strong className='purple' children='Works' />
        </h1>
        <p style={{ color: 'white' }}>
          Here are some of the projects I've recently worked on.
        </p>

        {/* Projects */}
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {projects.map((project, index) => (
            <Col md={4} className='card-container' children={project} key={index} />
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
