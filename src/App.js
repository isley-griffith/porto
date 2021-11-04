import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Trips from "./pages/Trips.js";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </>
  );
}

export default App;
