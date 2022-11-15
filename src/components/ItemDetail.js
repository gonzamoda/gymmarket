import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";

const ItemDetail = ({ productoDetalle }) => {
  const ButtonIr = () => {
    return (
      <Button as={Link} to="/cart">
        Ir al carrito
      </Button>
    );
  };

  const [inputType, setInputType] = useState("botonItemCount");

  const { addProduct } = useContext(contexto);

  const onAdd = (cantidad) => {
    const productoFormateado = { ...productoDetalle, cantidad };
    addProduct(productoFormateado);
    setInputType("botonIrCarrito");
  };

  return (
    <Container>
      <Row>
        <Col md="6">
          <img
            className="imgDetail"
            src={productoDetalle.img}
            alt={productoDetalle.nombre}
          />
        </Col>
        <Col md="6">
          <div className="pt-5">
            <h1>{productoDetalle.nombre}</h1>
            <p>{productoDetalle.descripcion}</p>
            <h2>${productoDetalle.precio}</h2>
          </div>

          <div>
            {inputType === "botonItemCount" ? (
              <ItemCount
                stock={productoDetalle.stock}
                initial={1}
                onAdd={onAdd}
              />
            ) : (
              <>
                <ButtonIr />
                <Button className="botonSeguir" as={Link} to="/">
                  Seguir Comprando
                </Button>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
