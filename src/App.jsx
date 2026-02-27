import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./Home";
import SearchResult from "./SearchResult";
import { CartToastSuccess } from "./toasts/CartToastSuccess";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <CartToastSuccess />
    </>
  );
}

export default App;
