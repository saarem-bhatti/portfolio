import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  DiDjango,
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiPython,
  DiReact
} from 'react-icons/di'
import { FaAws } from 'react-icons/fa'
import {
  SiC,
  SiCss3,
  SiDocker,
  SiFlask,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiNextdotjs,
  SiNpm,
  SiNuxtdotjs,
  SiPostgresql,
  SiTypescript,
  SiVuedotjs
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import '../../styles/About.css'

/* Component of the about section which consists of my tech stack. */
function Techstack() {
  const languages = [
    { text: 'JavaScript', icon: <DiJavascript1 /> },
    { text: 'TypeScript', icon: <SiTypescript /> },
    { text: 'Python', icon: <DiPython /> },
    { text: 'Java', icon: <DiJava /> },
    { text: 'C', icon: <SiC /> }
  ]

  const frontend = [
    { text: 'React.js', icon: <DiReact /> },
    { text: 'Next.js', icon: <SiNextdotjs /> },
    { text: 'Vue.js', icon: <SiVuedotjs /> },
    { text: 'Nuxt.js', icon: <SiNuxtdotjs /> },
    { text: 'React Native', icon: <TbBrandReactNative /> },
    { text: 'HTML', icon: <SiHtml5 /> },
    { text: 'CSS', icon: <SiCss3 /> }
  ]

  const backend = [
    { text: 'Node.js', icon: <DiNodejs /> },
    { text: 'Graphql', icon: <SiGraphql /> },
    { text: 'Flask', icon: <SiFlask /> },
    { text: 'Django', icon: <DiDjango /> }
  ]

  const databases = [
    { text: 'PostgreSQL', icon: <SiPostgresql /> },
    { text: 'MySQL', icon: <DiMysql /> },
    { text: 'MongoDB', icon: <DiMongodb /> }
  ]

  const developmentTools = [
    { text: 'Git', icon: <DiGit /> },
    { text: 'Docker', icon: <SiDocker /> },
    { text: 'AWS', icon: <FaAws /> },
    { text: 'GitHub Actions', icon: <SiGithubactions /> },
    { text: 'npm', icon: <SiNpm /> }
  ]

  // Array of tech stack icons.
  const techstack = {
    Languages: languages,
    Frontend: frontend,
    Backend: backend,
    Databases: databases,
    'Development Tools': developmentTools
  }

  return (
    <div className='techstack-container'>
      {/* Component Title */}
      <h1 className='heading'>
        Professional <strong className='purple' children='Skillset' />
      </h1>

      {/* Techstack Subsections */}
      {Object.keys(techstack).map((tech, index) => (
        <Row className='tech-row' key={index} style={{ justifyContent: 'center' }}>
          {/* Techstack Title */}
          <h1 className='heading purple'>{tech}</h1>

          {/* Techstack Icons */}
          {techstack[tech].map((tech, index) => (
            <Col xs={4} md={2} className='tech-icons' key={index}>
              {tech.icon}
              <div className='tech-text purple' children={tech.text} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  )
}

export default Techstack
