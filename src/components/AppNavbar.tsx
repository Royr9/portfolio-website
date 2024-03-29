import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Offcanvas  from 'react-bootstrap/Offcanvas';


function AppNavbar() {
  return (
      <Navbar variant='dark' className='drawer-navbar'  expand="md">
          <Container fluid >
          
            <Navbar.Toggle color='white' aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                 Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center w-100  flex-grow-1 pe-3 ">
                  <Nav.Link href="#hero-section">Home</Nav.Link>
                  <Nav.Link href="#project">Projects</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
           
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  )
}

export default AppNavbar;