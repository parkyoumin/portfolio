import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Youmin's Portfolio</Navbar.Brand>
          <Nav>
            <Nav.Link href="#aboutme">About me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
