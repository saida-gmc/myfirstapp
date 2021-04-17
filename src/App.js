import logo from "./logo.svg";
import "./App.css";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  ListGroup,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

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
              height="750px"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="http://vilee.fi/eng/wp-content/uploads/2020/11/whatislove-960x640-1.jpg"
              alt="Second slide"
              width="250px"
              height="750px"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://3.bp.blogspot.com/-8PbPNY6M4Bc/WUgIbiZhCVI/AAAAAAAAAKU/ntEeOSjm4UMwjxuQ9VZgNzmnxc3aFal1gCLcBGAs/s1600/How-to-save-money-while-shopping-online-4-2-iloveimg-compressed.jpg"
              alt="Third slide"
              width="250px"
              height="750px"
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
      <div class="card">
        <div class="card-header">World's largest travel platform</div>
        <div class="card-body">
          <h5 class="card-title">
            Compare low prices on hotels, flights, and cruises
          </h5>
          <p class="card-text">TRAVEL NOTICE:Learn about COVID‑19</p>
          <a href="#" class="btn btn-primary">
            More to explore
          </a>
        </div>
      </div>
    </div>
  );
}
export default App;
