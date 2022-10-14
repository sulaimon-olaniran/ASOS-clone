import React from "react";
import "./styles/styles.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {NavbarComponent, ProductsComponent, ScrollToTop} from "./components";
import {FooterDesktopScreen} from "./components/footer";
import {
  Homepage,
  WomenShoppingPage,
  MenShoppingPage,
  ProductPage,
  SavedListPage,
} from "./pages";

function App() {
  console.log(NavbarComponent);
  return (
    <Router>
      <div className="application-container">
        <NavbarComponent />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/men" element={<MenShoppingPage />} />
            <Route path="/women" element={<WomenShoppingPage />} />
            <Route
              path="/men/category/:type/:sub_type/:category_id"
              element={<ProductsComponent />}
            />
            <Route
              path="/women/category/:type/:sub_type/:category_id"
              element={<ProductsComponent />}
            />
            <Route
              path="/men/product/:name/:product_id/:category_id"
              element={<ProductPage />}
            />
            <Route
              path="/women/product/:name/:product_id/:category_id"
              element={<ProductPage />}
            />
            <Route path="/saved-list" element={<SavedListPage />} />
          </Routes>
        </ScrollToTop>
        <FooterDesktopScreen />
      </div>
    </Router>
  );
}

export default App;
