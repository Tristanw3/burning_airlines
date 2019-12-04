import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Brand.css";

class Brand extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://exploremymission.org/wp-content/uploads/2019/07/Cheapest-MOnth-to-Book-Flights-to-India.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Peace of Mind</h3>
              <p>
                Search for our available flights, plan your journey in advance.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://img01.yitubao.com/190124/2285-1Z1241K11727.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Getting the Best Seat</h3>
              <p>
                We do reserve seats for our most loyal guests and those with
                special needs.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.manlyhotel.com/wp-content/uploads/2016/09/Beach-holidays.jpg"
            />

            <Carousel.Caption>
              <h3>Enjoy Your Trip</h3>
              <p>Have a nice trip!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Brand;
