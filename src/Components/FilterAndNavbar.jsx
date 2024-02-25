import React, { useState } from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Offcanvas, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../CSS/FilterAndNavbar.css'
import '../CSS/FilterAndNavbar.css'

function FilterAndNavbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
          <Navbar bg="dark" data-bs-theme="dark">
          <Container>

          {/* start menu btn */}            
          <Button variant="primary" onClick={handleShow}>
          <Navbar.Brand>
          <Link to ="/menu"><p className='btn'>Menu</p></Link>
          </Navbar.Brand>
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            {/* start the mmenu details */}
          <Offcanvas.Title>SPOTIFY</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

          <p className="Profile"><Link to= "/profil">My Profile</Link> </p>
          <p className="My Playlsit"><Link to="/Playlist">My Playlist</Link></p>
          <p className="Singers"><Link to="/AllSingers">List Of Singers</Link></p>
          <p className=""><Link to="/Poadcasts">Poadcasts</Link></p>
          <p className=""></p>


          </Offcanvas.Body>
          {/* end the mmenu details */}
          </Offcanvas>
          {/* end of menu btn */}
          {/* start the other parts of navbar */}
            <Nav className="me-auto">
            <Nav.Link>
              <Link to="/thehome"><p className="count">Home</p></Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/ListOfSingers"><p className="count">Songers</p></Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/profil"><p className="count">Your Profile</p></Link>
            </Nav.Link>
            </Nav>
          {/* end the other parts of navbar */}
          {/* start search place */}
          <Form>
          <Row>
          <Col>
          <Form.Control placeholder="Search" />
          </Col>
          </Row>
          </Form>
          {/* end search place */}
          </Container>
          </Navbar>
    </div>
  )
}

export default FilterAndNavbar
