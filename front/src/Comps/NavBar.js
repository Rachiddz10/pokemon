
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
           <Nav.Link href="Trainers">Trainers</Nav.Link>
          <Nav.Link href="Pokemons">Pokemons</Nav.Link>

          <NavDropdown title="ADD" id="navbarScrollingDropdown">
             <NavDropdown.Item href="AddTrainer">
            Add Trainers
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="AddPokemon">
            Add Pokemons
            </NavDropdown.Item>
          </NavDropdown>
        
        </Nav>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  );
}

export default NavBar;