import React from "react";
import "./styles/styles.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {NavbarComponent, ProductsComponent} from "./components";
import {FooterDesktopScreen} from "./components/footer";
import {
  Homepage,
  WomenShoppingPage,
  MenShoppingPage,
  ProductPage,
} from "./pages";

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
          <Route
            path="/men/:type/:sub_type/:category_id"
            element={<ProductsComponent />}
          />
          <Route
            path="/men/product/:name/:product_id/:category_id"
            element={<ProductPage />}
          />
        </Routes>
        <FooterDesktopScreen />
      </div>
    </Router>
  );
}

export default App;
