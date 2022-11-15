import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";

const NavBarMarket = () => {
  const { carrito } = useContext(contexto);
  const cantidadTotal = carrito
    .map((item) => item.cantidad)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="ms-5" as={Link} to="/">
          GyM
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/nosotros">
            Nosotros
          </Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/categoria/plantas">
              Plantas
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/macetas">
              Macetas
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categoria/tierra">
              Tierra
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/">
              Todos los productos
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Link id="carrito" to="/cart">
          <CartWidget />
          <span
            className={
              cantidadTotal > 0 ? "cantidadCarrito" : "carritoNoVisible"
            }
          >
            {cantidadTotal}
          </span>
        </Link>
      </Navbar>
    </>
  );
};
export default NavBarMarket;
