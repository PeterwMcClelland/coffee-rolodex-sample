import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import Coffees from "./components/Coffee/Coffees";
import About from "./components/About";
import CoffeeDetail from "./components/Coffee/CoffeeDetail";


function App() {
  return (
    <BrowserRouter>
  <React.Fragment>
    <header className="header">
      <Header />
    </header>
    

    <main>
      <Routes>
        <Route path="/coffee-list" element={<Home />} />
        <Route path="/add" element={<AddCoffee />} />
        <Route path="/coffees" element={<Coffees />} />
        <Route path="/about" element={<About />} />
        <Route path="/coffees/:id" element={<CoffeeDetail/>} />
        <Route path="/" element={<Navigate to="/Coffee-List" />} /> 
      </Routes>
    </main>
  </React.Fragment>
</BrowserRouter>
  );
}

export default App;
