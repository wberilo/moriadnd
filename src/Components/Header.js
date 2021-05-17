import Carousel from "react-bootstrap/Carousel";
import Moriastarmapb from './Moriastarmapb.png'

function Header() {
  return (
    <Carousel fade className="carousel">
    <Carousel.Item className="carousel" interval={5000}>
      <img
        className="d-block w-100"
        src={Moriastarmapb}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carousel" interval={5000}>
      <img
        className="d-block w-100"
        src={Moriastarmapb}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carousel">
      <img
        className="d-block w-100"
        src={Moriastarmapb}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Header;
