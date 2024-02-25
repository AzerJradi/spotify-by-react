import React from 'react'
import '../CSS/Poadcast.css'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Poadcasts({poadcast}) {
  console.log(poadcast)
  return (
    <div className='card-container'>
          <Link to={`/poadcast/${poadcast.id}`}>
            <Card style={{ width: '22rem' }}>
                  <Card.Img variant="top" src={poadcast.ImgOfPoad} />
                  <Card.Body>
                    <Card.Title className='poadcast-title'>{poadcast.title}</Card.Title>
                    <Card.Text className='poadcast-main'>By: {poadcast.MainPerson} </Card.Text>
                    <Card.Text className='poadcast-guest'>With: {poadcast.Guest} </Card.Text>
                    <div className="fztT3Lpoadcats">
                      <ListGroup variant="flush">
                      <ListGroup.Item className='poadcast-duration'>{poadcast.duration}</ListGroup.Item>
                      <ListGroup.Item className='poadcast-dateOfRelease'>{poadcast.dateOfRelease}</ListGroup.Item>
                      </ListGroup >
                      <Button variant="primary" className='poadcast-button'><Link to="/watchNow">Watch now</Link></Button>
                    </div>
                  </Card.Body>
                </Card>
          </Link>
    </div>
  )
}

export default Poadcasts
