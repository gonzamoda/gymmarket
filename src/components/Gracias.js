import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Gracias = () => {
  return (
    <>
      <h1>
        Gracias por su compra, te hemos envíado un mail con los datos de tu
        compra
      </h1>
      <Button as={Link} to="/">
        Seguir Comprando
      </Button>
    </>
  );
};

export default Gracias;
