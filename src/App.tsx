import React from "react";
import "./styles/styles.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {NavbarComponent} from "./components";
import {FooterDesktopScreen} from "./components/footer";
import {Homepage, WomenShoppingPage, MenShoppingPage} from "./pages";

function App() {
  return (
    <Router>
      <div className="application-container">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/men" element={<MenShoppingPage />} />
          <Route path="/women" element={<WomenShoppingPage />} />
        </Routes>
        <FooterDesktopScreen />
      </div>
    </Router>
  );
}

export default App;
