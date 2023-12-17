import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./component/NavBar";
import ViewDetails from "./component/ViewDetails";
import ShoppingCarts from "./component/ShoppingCarts";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import Checkout from "./component/Checkout";

// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/ViewDetails/:id" element={<ViewDetails />} />
        <Route path="/ShoppingCarts" element={<ShoppingCarts />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
