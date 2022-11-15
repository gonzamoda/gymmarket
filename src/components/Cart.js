import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito } = useContext(contexto);

  const { removeProduct } = useContext(contexto);

  const eliminar = (id) => {
    removeProduct(id);
  };

  const precioTotal = carrito
    .map((item) => item.precio)
    .reduce((prev, curr) => prev + curr, 0);

  return carrito.length === 0 ? (
    <>
      <h1>carrito vacio</h1>
      <Button as={Link} to="/">
        Ir al listado de productos
      </Button>
    </>
  ) : (
    <>
      <h1>Carrito</h1>
      <Container>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>Ítem</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((element) => (
                <tr key={element.id}>
                  <td>{element.nombre}</td>
                  <td>{element.cantidad}</td>
                  <td>${element.precio}</td>
                  <td>
                    <Button
                      onClick={() => eliminar(element.id)}
                      variant="danger"
                    >
                      X
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1>Total: ${precioTotal}</h1>
        </Row>
        <Row>
          <Button as={Link} to="/user">
            COMPRAR
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
