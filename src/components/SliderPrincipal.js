import Carousel from "react-bootstrap/Carousel";
import slider01 from "../images/slider01.jpg";
import slider02 from "../images/slider02.jpg";

const SliderPrincipal = () => {
  return (
    <Carousel className="slider">
      <Carousel.Item className="slider">
        <img className="d-block w-100" src={slider01} alt="First slide" />
        <Carousel.Caption>
          <h3>Plantas de Interior y Exterior</h3>
          <p>Todo lo que buscás en un solo lugar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider">
        <img className="d-block w-100" src={slider02} alt="Second slide" />
        <Carousel.Caption>
          <h3>Plantas de Interior y Exterior</h3>
          <p>Todo lo que buscás en un solo lugar</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SliderPrincipal;
