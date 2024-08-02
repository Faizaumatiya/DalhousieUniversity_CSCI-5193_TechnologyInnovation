import { Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Routes from "./services/Routes";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
