import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbartv() {
  return (
    <Navbar bg="" expand="lg" className='bg-color pt-3'>
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 mx-5 my-lg-0 fs-medium"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-color'>My Movies</Nav.Link>
            <Nav.Link href="#action2" className='text-color'>Seasonal Movies</Nav.Link>
            <Nav.Link href="#action2" className='text-color'>Part Movies</Nav.Link>
            <Nav.Link href="#action2" className='text-color'>Blacklisted</Nav.Link>
            <Nav.Link href="#action2" className='text-color'>Users</Nav.Link>
            
          </Nav>
          <div className='mx-5'>
          <img src="../images/notif-icon.png" alt="notification Img" className='notification-img'/>
          <img src="../images/profile-img.png" alt="notification Img2" className='notification-img'/>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbartv;