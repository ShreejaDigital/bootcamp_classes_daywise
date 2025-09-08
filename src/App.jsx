import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProduct";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </>
  );
}

export default App;
