import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "@css/menu.scss";

const Menu = () => {
  return (
    <>
      <Navbar
        id="mavbar-main"
        fixed="top"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="#home">Youmin's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="#aboutme">about me</Nav.Link>
              <Nav.Link href="#skills">skills</Nav.Link>
              <Nav.Link href="#projects">projects</Nav.Link>
              <Nav.Link href="#career">career</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
