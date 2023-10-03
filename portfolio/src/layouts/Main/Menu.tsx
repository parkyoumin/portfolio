import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "@css/menu.scss";
import { useEffect, useState } from "react";
import i18n from "@/locales/i18n";
import { NavDropdown } from "react-bootstrap";

const Menu = () => {
  const [scrollY, setScrollY] = useState(0);
  const updateScrollY = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollY);

    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  });

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Navbar
        id="navbar-main"
        fixed="top"
        expand="lg"
        className={scrollY > 80 ? "visible-background" : "invisible-background"}
      >
        <Container>
          <Navbar.Brand href="#home">Youmin's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="#aboutme" className="px-3">
                About me
              </Nav.Link>
              <Nav.Link href="#skills" className="px-3">
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" className="px-3">
                Projects
              </Nav.Link>
              <Nav.Link href="#career" className="px-3">
                Career
              </Nav.Link>
              <NavDropdown title="Language">
                <NavDropdown.Item onClick={() => changeLanguage("ko")}>
                  한국어
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage("en")}>
                  English
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
