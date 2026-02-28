import "./App.css";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from "./features/cart/Cart";
import Home from "./UI/Home";
import SearchResult from "./features/search/SearchResult";
import { CartToastSuccess } from "./features/cart/CartToastSuccess";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />

      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>

      <CartToastSuccess />
      <Footer />
    </Box>
  );
}

export default App;
