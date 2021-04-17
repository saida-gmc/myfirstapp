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
import FirstComponent from "./Components/FirstComponent";
import BodyComponent from "./Components/BodyComponent";
import LastComponent from "./Components/LastComponent";
import OptionsComponent from "./Components/OptionsComponent";

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <BodyComponent />
      <OptionsComponent />
      <LastComponent />
    </div>
  );
}
export default App;
