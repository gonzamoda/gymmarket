import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Item = ({ nombre, imagen, descripcion, stock, precio, id }) => {
  return (
    <>
      <Card className="itemCard">
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title className="cardTitle">{nombre}</Card.Title>
          <Card.Subtitle className="cardPrice">${precio}</Card.Subtitle>
          <Button
            variant="outline-primary"
            as={Link}
            to={`/productos/detalles/${id}`}
          >
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
