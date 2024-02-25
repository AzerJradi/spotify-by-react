import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../CSS/SongersProfil.css'
import { Link } from 'react-router-dom'

function SongersProfil({singer}) {

  return (
    <div className='CardOfSonger'>
      <Link to={`/songer/${singer.id}`}>
        <Container>
        <Row >
        <Col xs={6} md={6}>
        <Image src={singer.IMG} className='imgOfSonger'/>
        </Col>
        </Row>
        <div className="p">
          <p className='pOne'>{singer.name}</p>
          <p className='pTwo'>{singer.NumberOfTitle}</p>
        </div>
        </Container>
        </Link>
    </div>
  )
}

export default SongersProfil
