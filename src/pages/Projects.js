import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import edoplaImg from '../assets/Projects/edopla.png'
import figmaImg from '../assets/Projects/figma.png'
import voyageCanadaImg from '../assets/Projects/voyage_canada.png'
import Particle from '../components/Particle'
import ProjectCard from '../components/Projects/ProjectCard'
import '../styles/Projects.css'

function Projects() {
  const projects = [
    <ProjectCard
      imgPath={edoplaImg}
      title='Edopla'
      description='Edopla is a food delivery platform that empowers local vendors by providing them
      a larger share of the sale revenue while offering customers an affordable and convenient way
      to enjoy local flavors. The platform is built using the MERN stack with TypeScript. A main
      feature allows users to place orders from vendors and have it delivered to their front doors!'
      ghLink='https://github.com/saad-bhatti/Edopla'
      demoLink='https://edopla.onrender.com/'
    />,
    <ProjectCard
      imgPath={voyageCanadaImg}
      title='Voyage Canada'
      description='VoyageCanada is a travel platform designed to help users explore the diverse 
      landscapes of Canada, offering both intra-province and inter-province travel options. The
      platform is built using JavaScript, React, Node.js, GraphQL, and MongoDB Atlas, ensuring a
      seamless travel planning experience.'
      ghLink='https://github.com/saad-bhatti/VoyageCanada'
      demoLink='https://voyagecanada.onrender.com/'
    />,
    <ProjectCard
      imgPath={figmaImg}
      title='PeerTasker'
      description='PeerTasker is a task management app that introduces a social element, fostering
      accountability and healthy competition among peers to boost productivity. The app allows users
      to create tasks, form groups, and compete on a leaderboard, motivating users to complete tasks
      first. The project emphasized a user-centric design approach, utilizing Balsamiq and Figma for
      prototyping.'
      demoLink='https://www.figma.com/proto/8QzoTMfcjxr2wYDf16zlxM/PeerTasker?type=design&node-id=386-8318&t=dJWoVtKNEala8Y1B-1&scaling=scale-down&page-id=386%3A6006&starting-point-node-id=386%3A8318&mode=design'
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
          Here are some of the open-sourced projects I've recently worked on.
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
