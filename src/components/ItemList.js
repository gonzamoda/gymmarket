import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemList = ({ productos }) => {
  return (
    <>
      <ul>
        <Container>
          <Row>
            {productos.map((element) => (
              <Col md="4">
                <li key={element.id}>
                  <Item
                    id={element.id}
                    nombre={element.nombre}
                    imagen={element.img}
                    descripcion={element.descripcion}
                    stock={element.stock}
                    precio={element.precio}
                  />
                </li>
              </Col>
            ))}
          </Row>
        </Container>
      </ul>
    </>
  );
};

export default ItemList;
