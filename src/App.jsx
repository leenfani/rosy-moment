import "./App.css";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from "./features/cart/Cart";
import Home from "./UI/Home";
import SearchResult from "./features/search/SearchResult";
import { CartToastSuccess } from "./features/cart/CartToastSuccess";

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
      <Footer />
    </>
  );
}

export default App;
