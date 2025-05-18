import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../components/Particle'
import GalleryCard from '../components/Gallery/GalleryCard'
import p01_01 from '../assets/Gallery/project01-01.jpeg'
import p02_01 from '../assets/Gallery/project02-01.jpeg'
import p03_01 from '../assets/Gallery/project03-01.jpeg'
import p03_02 from '../assets/Gallery/project03-02.jpeg'
import p04_01 from '../assets/Gallery/project04-01.jpeg'
import p04_02 from '../assets/Gallery/project04-02.jpeg'
import '../styles/gallery.css'

function Gallery() {
  const gallery = [
    // <GalleryCard imgPath={p01_01} description='Sales & Website Performance Dashboard Screenshot' />,
    <GalleryCard imgPath={p02_01} description='Sneaker Sentiment Intelligence Engine Screenshot' />
    // <GalleryCard
    //   imgPath={p03_01}
    //   description='Customer Retention Intelligence Tracker Screenshot I'
    // />,
    // <GalleryCard
    //   imgPath={p03_02}
    //   description='Customer Retention Intelligence Tracker Screenshot II'
    // />,
    // <GalleryCard
    //   imgPath={p04_01}
    //   description='Rep Performance Intelligence Dashboard Screenshot I'
    // />,
    // <GalleryCard
    //   imgPath={p04_02}
    //   description='Rep Performance Intelligence Dashboard Screenshot II'
    // />
  ]

  return (
    <Container fluid className='gallery-container'>
      <Particle />

      <Container>
        {/* Component title and subtitle */}
        <h1 className='heading'>
          <strong className='purple' children='Gallery' />
        </h1>
        <p style={{ color: 'white' }}>Here are screenshots of the projects I've worked on.</p>

        {/* Gallery */}
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {gallery.map((item, index) => (
            <Col md={6} className='card-container' children={item} key={index} />
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Gallery
