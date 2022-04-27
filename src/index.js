import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stores from "./pages/Stores";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
