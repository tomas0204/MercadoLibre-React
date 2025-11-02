import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import{ Link, NavLink} from 'react-router';
import { BsSearch } from "react-icons/bs";

function Menu() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/home"}>Mercado Libre</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Destacados</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Más Vendidos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Menor Precio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar productos"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <BsSearch size={20} />
            </Button>
          </Form>
          <Nav className='ps-5 pe-5'>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Menu;