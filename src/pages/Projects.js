import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../components/Particle'
import performanceDashboardImg from '../assets/Projects/performance-dashboard.jpeg'
import sneakerSentimentImg from '../assets/Projects/sneaker-sentiment.png'
import preCallPlannerImg from '../assets/Projects/precall-planner.png'
import ProjectCard from '../components/Projects/ProjectCard'
import '../styles/Projects.css'

function Projects() {
  const projects = [
    <ProjectCard
      imgPath={performanceDashboardImg}
      title='Sales & Website Performance Dashboard'
      techstack={['PowerBI']}
      description='This dashboard was designed to help Marketing and Commercial teams monitor key
      trends in sales and website traffic at the customer level. It provides a clear view of growth
      and decline across accounts, highlights changes in how customers are accessing the website
      (e.g., device type, referral source), and connects these behavioral shifts to revenue
      performance. The dashboard supports strategic decision-making by surfacing actionable insights
      on customer engagement and conversion dynamics.'
    />,
    <ProjectCard
      imgPath={sneakerSentimentImg}
      title='Sneaker Sentiment Intelligence Engine'
      techstack={['Python', 'SQL', 'Power BI']}
      description='Built a real-time sentiment analysis engine tracking buzz around the latest 
      basketball shoe releases across Twitter, Reddit, and sneaker forums. Used Python for NLP and 
      keyword tracking, SQL for structured storage, and Power BI for dynamic visualizations. Helped 
      brand teams understand launch reactions, influencer impact, and key drivers of positive or 
      negative sentiment to guide future product and campaign decisions.'
    />,
    <ProjectCard
      imgPath={preCallPlannerImg}
      title='Pre-Call Intelligence Planner'
      techstack={['Power BI', 'Salesforce', 'SQL', 'Power Query']}
      description='Developed a Power BI tool that auto-generates tailored customer snapshots for 
      sales reps ahead of client meetings. Integrated Salesforce, ERP, and support data to surface 
      purchase history, engagement trends, open issues, and account notes in one view. Equipped 
      sales sales teams with actionable insights, improving call preparedness and conversion rates.'
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
        <p style={{ color: 'white' }}>Here are some of the projects I've recently worked on.</p>

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
