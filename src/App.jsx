import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
