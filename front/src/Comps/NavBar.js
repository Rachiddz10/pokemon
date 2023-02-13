
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
 
function NavBar() {
  const mystyle = { minWidth: '25%' }; 

  const myclass = " btn  btn-outline-info rounded-pill mx-3 text-info font-weight-bold"
  return (

    <Navbar bg="withe" expand="lg" className='my-2 ml-5'>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto mx-5  mh-100" navbarScroll>
            <Nav.Link href="/" style={mystyle} className={myclass}>Home</Nav.Link>

            <Nav.Link href="Trainers" style={mystyle} className={myclass}>Trainers</Nav.Link>
            <Nav.Link href="Pokemons" style={mystyle} className={myclass}>Pokemons</Nav.Link>

            <Nav.Link href="AddTrainer" style={mystyle} className={myclass}>   Add Trainers</Nav.Link>
            <Nav.Link href="AddPokemon" style={mystyle} className={myclass}> Add Pokemons</Nav.Link>

            <Nav.Link href="/" style={mystyle} className={myclass}>   Battle</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;