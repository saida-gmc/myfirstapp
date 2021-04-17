import react from "react";
import { Carousel } from "react-bootstrap";

const BodyComponent = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src=" https://www.lechotouristique.com/wp-content/uploads/2020/03/adobestock_280828158.jpg"
            alt="First slide"
            width="250px"
            height="350px"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="http://vilee.fi/eng/wp-content/uploads/2020/11/whatislove-960x640-1.jpg"
            alt="Second slide"
            width="250px"
            height="350px"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://3.bp.blogspot.com/-8PbPNY6M4Bc/WUgIbiZhCVI/AAAAAAAAAKU/ntEeOSjm4UMwjxuQ9VZgNzmnxc3aFal1gCLcBGAs/s1600/How-to-save-money-while-shopping-online-4-2-iloveimg-compressed.jpg"
            alt="Third slide"
            width="250px"
            height="350px"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default BodyComponent;
