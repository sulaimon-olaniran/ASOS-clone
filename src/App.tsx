import React from "react";
import "./styles/styles.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {NavbarComponent, ProductsComponent} from "./components";
import {FooterDesktopScreen} from "./components/footer";
import {Homepage, WomenShoppingPage, MenShoppingPage} from "./pages";

function App() {
  console.log(NavbarComponent);
  return (
    <Router>
      <div className="application-container">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/men" element={<MenShoppingPage />} />
          <Route path="/women" element={<WomenShoppingPage />} />
          <Route path="/men/new-in" element={<ProductsComponent />} />
        </Routes>
        <FooterDesktopScreen />
      </div>
    </Router>
  );
}

export default App;
