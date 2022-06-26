import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Foods from "./pages/Foods";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>


      </Navbar>
    </>
  );
}

export default App;
