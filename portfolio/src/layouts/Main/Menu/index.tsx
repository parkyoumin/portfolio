import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "@css/menu.scss";

const Menu = () => {
  return (
    <>
      <Navbar className="py-3">
        <Container>
          <Navbar.Brand href="#home">Youmin's Portfolio</Navbar.Brand>
          <Nav activeKey={location.pathname}>
            <Nav.Link href="#aboutme">about me</Nav.Link>
            <Nav.Link href="#skills">skills</Nav.Link>
            <Nav.Link href="#projects">projects</Nav.Link>
            <Nav.Link href="#career">career</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
