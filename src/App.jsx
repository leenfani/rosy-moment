import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Cart from "./cart/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
