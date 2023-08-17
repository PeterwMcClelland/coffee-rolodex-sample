import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AddCoffee from "./components/AddCoffee";
import Coffees from "./components/Coffee/Coffees";
import CoffeeDetail from "./components/Coffee/CoffeeDetail";
import Tds from "./components/Tds";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <header className="header">
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/coffees" />} />
            <Route path="/tds" element={<Tds />} />
            <Route path="/add" element={<AddCoffee />} />
            <Route path="/coffees" element={<Coffees />} />
            <Route path="/coffees/:id" element={<CoffeeDetail />} />
            <Route
              path="/coffee-list"
              element={<Navigate to="/Coffee-List" />}
            />
          </Routes>
        </main>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
