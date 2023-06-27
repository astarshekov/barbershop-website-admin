import { Route, Routes } from "react-router-dom";
import Barbers from "./components/Barbers";
import Pricing from "./components/Pricing";
import Works from "./components/Works";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";
import "./app.css";
const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barbers" element={<Barbers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/works" element={<Works />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
