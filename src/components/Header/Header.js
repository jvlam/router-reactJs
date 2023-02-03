import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar className='background' expand="lg">
            <Container>
                <Navbar.Brand href="#home">Quizlet</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/users">Users</Link>
                        <Link className='nav-link' to="/admins">Admin</Link>
                    </Nav>
                    <Nav>
                        <button className='btn-login'>Log in</button>
                        <button className='btn-signup'>Sign up</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;