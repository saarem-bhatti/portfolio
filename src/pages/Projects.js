import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../components/Particle'
import performanceDashboardImg from '../assets/Projects/performance-dashboard.jpeg'
import sneakerSentimentImg from '../assets/Projects/sneaker-sentiment.png'
import intelligenceTracker from '../assets/Projects/intelligence-tracker.jpeg'
import intelligenceDashboard from '../assets/Projects/intelligence-dashboard.jpeg'
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
      imgPath={intelligenceTracker}
      title='Customer Retention Intelligence Tracker'
      techstack={['Power BI', 'SQL']}
      description='Developed a data-driven reporting solution to identify customers at risk of 
      churn, those who have shifted spend to competitors, and those successfully retained. 
      Leveraged SQL to analyze recent purchase patterns and Power BI to visualize customer migration 
      trends and recovery impact. Equipped leadership with clear insights into retention performance, 
      enabling proactive outreach, improved account targeting, and data-backed investment in 
      customer loyalty initiatives.'
    />,
    <ProjectCard
      imgPath={intelligenceDashboard}
      title='Rep Performance Intelligence Dashboard'
      techstack={['Power BI', 'SQL']}
      description='Created a performance dashboard that analyzes sales rep activity metrics, 
      compares sales outcomes to AOP targets, and segments performance by rep tenure. Used SQL to 
      model activity-to-outcome correlations and Power BI to visualize trends across teams, seniority 
      levels, and timeframes. Enabled leadership to identify performance drivers, coach reps more 
      effectively, and refine onboarding strategies for new sellers.'
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
            <Col md={6} className='card-container' children={project} key={index} />
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
