import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import nosotros from "../images/nosotros.jpg";

const Nosotros = () => {
  return (
    <>
      <Container>
        <Row id="nosotros">
          <Col>
            <img className="nosotrosImg" src={nosotros} alt="Nosotros" />
          </Col>
          <Col>
            <p>
              Somos un emprendimiento que nace del amor y del fanatismo que
              tenemos por las plantas. Somos dos amigos que disfrutamos mucho de
              ellas y que de tanto compartir tips, fotos, experiencias,
              recomendaciones y algún que otro intercambio de plantas, nos dimos
              cuenta que teníamos entre manos un hermoso proyecto que decidimos
              encarar con pasión. Para nosotros, una planta es un ser vivio que
              nos acompaña y agasaja con su belleza en la intimidad de nuestro
              hogar. Es una compañía que nos alegra todos los días con sus
              colores, texturas y formas. Es un ser que requiere atención y
              cuidado, que se comunica y crece. Una casa es un hogar cuando hay
              plantas. Ese es nuestro lema y por eso nuestro objetivo es
              ayudarte a convertir tu casa en un hogar. Sabemos que no todos
              conocen cómo cuidarlas y por eso no se animan a tener una, o
              piensan que requiere mucha atención y tiempo. Es por eso que una
              parte fundamental es el asesoramiento y el seguimiento de nuestros
              clientes y sus plantitas. Prometemos tomarnos todo el tiempo que
              sea necesario para acompañarte en tu proceso de busqueda de una
              planta.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Nosotros;
