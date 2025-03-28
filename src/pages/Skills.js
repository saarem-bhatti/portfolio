import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Particle from '../components/Particle'
import '../styles/Skills.css'
import Card from 'react-bootstrap/Card'
import laptopImg from '../assets/about.png'

function Skills() {
  return (
    <Container fluid className='skills-container'>
      <Particle />

      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          {/* Skills Text */}
          <Col md={7} className='skills-text'>
            {/* Skills Title */}
            <h1 className='heading'>
              My <strong className='purple' children='SKILLS' />
            </h1>

            {/* Skills Card */}
            <Card className='skills-card'>
              <Card.Body>
                <blockquote className='blockquote mb-0'>
                <p className='purple' children='Core Competencies' />
                <ul>
                  <li className='skills-item' children='Business Analytics & Insights' />
                  <li className='skills-item' children='Reporting & Data-Driven Decision Making' />
                  <li className='skills-item' children='Sales & Marketing Analytics' />
                  <li className='skills-item' children='Performance Optimization & Growth Strategies' />
                  <li className='skills-item' children='Financial Modeling & FP&A' />
                  <li className='skills-item' children='Monthly and Quarterly Business Reviews' />
                  <li className='skills-item' children='Annual Operating Planning' />
                  <li className='skills-item' children='Cross-Functional Collaboration' />
                  <li className='skills-item' children='Stakeholder Engagement' />
                  <li className='skills-item' children='Strategic Planning & Execution' />
                </ul>
                <br />
                <br />

                <p className='purple' children='Technical Skills' />
                <ul>
                  <li className='skills-item' children='Data Visualization: Power BI, Tableau' />
                  <li className='skills-item' children='Salesforce.com (SFDC)' />
                  <li className='skills-item' children='SQL' />
                  <li className='skills-item' children='DAX, Power Query' />
                  <li className='skills-item' children='Snowflake' />
                  <li className='skills-item' children='Python' />
                  <li className='skills-item' children='Microsoft Excel (VBA)' />
                  <li className='skills-item' children='SAP S/4HANA, Cognos' />
                  <li className='skills-item' children='Oracle (Hyperion) and CMR/Essbase' />
                </ul>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>

          {/* Skills Image */}
          <Col md={5} style={{ alignSelf: 'center', paddingTop: '120px', paddingBottom: '50px' }} className='skills-img'>
            <img src={laptopImg} alt='about' className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Skills
