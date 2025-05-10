import React from 'react'
import Card from 'react-bootstrap/Card'

/* Component of the gallery section which creates a gallery card. */
function GalleryCard(props) {
  return (
    <Card className='gallery-card'>
      {/* Card image */}
      {props.imgPath && <Card.Img variant='top' src={props.imgPath} alt='card-img' />}

      {/* Card body */}
      <Card.Body>
        {/* Project description */}
        <Card.Text style={{ textAlign: 'center' }} children={props.description} />
      </Card.Body>
    </Card>
  )
}
export default GalleryCard
