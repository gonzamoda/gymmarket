import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [estado, setContador] = useState(initial);

  const sumarContador = () => {
    if (estado < stock) {
      setContador(estado + 1);
    }
  };

  const restarContador = () => {
    if (estado > 1) {
      setContador(estado - 1);
    }
  };

  const agregar = () => {
    if (stock > 0) {
      onAdd(estado);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <Container fluid>
        <Row className="contadorItem mt-4">
          <Col xs={4}>
            <Row>
              <Col>
                <Button className="botonMasMenos" onClick={restarContador}>
                  {" "}
                  -{" "}
                </Button>
              </Col>
              <Col>
                <p className="counterText">{estado}</p>
              </Col>
              <Col>
                <Button className="botonMasMenos" onClick={sumarContador}>
                  {" "}
                  +{" "}
                </Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Button
              className="botonAgregarCarrito"
              variant="primary"
              onClick={agregar}
            >
              Agregar al Carrito
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemCount;
