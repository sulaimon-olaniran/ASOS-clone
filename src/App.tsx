import React from "react";
import "./styles/styles.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {isBrowser} from "react-device-detect";

import {NavbarComponent, ProductsComponent, ScrollToTop} from "./components";
import {FooterDesktopScreen} from "./components/footer";
import {
  Homepage,
  WomenShoppingPage,
  MenShoppingPage,
  ProductPage,
  SavedListPage,
  BagPage,
} from "./pages";

function App() {
  if (!isBrowser)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            width: "90%",
            textAlign: "center",
          }}
        >
          App only available on desktop screens
        </h1>
      </div>
    );
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
            <Route path="/shopping-bag" element={<BagPage />} />
          </Routes>
        </ScrollToTop>
        <FooterDesktopScreen />
      </div>
    </Router>
  );
}

export default App;
