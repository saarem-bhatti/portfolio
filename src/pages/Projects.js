import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../components/Particle'
import performanceDashboardImg from '../assets/Projects/performance-dashboard.jpeg'
import financialInsightsImg from '../assets/Projects/financial-insights.png'
import commercialPulseImg from '../assets/Projects/commercial-pulse.png'
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
      imgPath={financialInsightsImg}
      title='Strategic Financial Modeling Suite'
      techstack={['Power BI', 'Excel (VBA)', 'SQL']}
      description='Built a financial modeling suite to support long-term planning and investment
      analysis for mid-market enterprises. Combined SQL-based data pipelines, Excel-based scenario 
      modeling, and Power BI visualizations to enable strategic forecasting, margin optimization, 
      and cash flow insights. Helped stakeholders assess ROI across initiatives, improve capital 
      allocation, and increase forecast accuracy by 25%.'
    />,
    <ProjectCard
      imgPath={commercialPulseImg}
      title='Commercial Pulse: Executive Insights Platform'
      techstack={['Power BI', 'Salesforce', 'SQL']}
      description='Developed a unified reporting platform that delivers near real-time insights into 
      sales pipeline health, marketing influence, and customer engagement. Integrated Salesforce and 
      SQL data into a sleek Power BI interface, enabling executives to track KPIs, spot trends, and 
      drive strategic decisions. Used across regional teams to align revenue strategy and improve 
      forecast accuracy.'
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
