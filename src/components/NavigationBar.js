import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">KI FILM</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Random</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            <Nav.Link href="#horor">HOROR</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
