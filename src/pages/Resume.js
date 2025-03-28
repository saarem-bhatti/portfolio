import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { AiOutlineDownload } from 'react-icons/ai'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import pdf from '../assets/Saarem-Bhatti-Resume.pdf'
import Particle from '../components/Particle'
import '../styles/Resume.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function Resume() {
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div>
      <Container fluid className='resume-section'>
        <Particle />

        {/* Download button */}
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank' style={{ maxWidth: '250px' }}>
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        {/* Resume view */}
        <Row className='resume'>
          <Document file={pdf} className='d-flex justify-content-center'>
          <Page
            pageNumber={1}
            scale={width > 786 ? 1.7 : 0.6}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
          </Document>
        </Row>

        {/* Download button */}
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank' style={{ maxWidth: '250px' }}>
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default Resume
