import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const cart = useSelector(state => state.cart.cart); 
  // console.log(cart.length);
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Redux Toolkit</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/"as={Link} >Product</Nav.Link>
            {/* <Nav.Link href="#features">Cart</Nav.Link> */}
          </Nav>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav.Link to="/cart"as={Link}> My Cart {cart.length} </Nav.Link>
                </Navbar.Text>
            </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;