import "./style.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutus from "./pages/About-page";
import Shop from "./pages/Shop-page";
import Contact from "./pages/Contact-page";
import Cart from "./pages/Cartpage";
import Login from "./pages/Login";
import Sign from "./pages/Signup";

const Layout = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign" element={<Sign />}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
