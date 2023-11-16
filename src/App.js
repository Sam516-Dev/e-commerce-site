import "./index.css";
import Navbar from "./Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import OurProducts from "./Components/OurProducts";
import SignIn from "./Components/SignIn";
function App() {
  return (
    <div className="  overflow-y-auto">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/OurProducts" element={<OurProducts />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
