import { NavLink } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="text-black nav-link fs-3">Contacts</NavLink>
        <NavLink to="" className="btn btn-primary">Add contact</NavLink>
      </Container>
    </Navbar>
  );
};

export default Navigation;