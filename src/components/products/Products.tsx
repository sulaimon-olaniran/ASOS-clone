import {useState, useEffect} from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import {useParams} from "react-router-dom";

import EachProdcut from "./each-product/Each-Product";
import {productType, categoryType} from "./interface";
import {rapid_api_key} from "../../assets/keys";

const getOptions = (offset: string, category_id: string) => {
  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: offset,
      categoryId: category_id,
      limit: "48",
      country: "US",
      sort: "freshness",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": rapid_api_key,
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  return options;
};

const ProductsComponent = () => {
  const [viewMore, setViewMore] = useState(false);
  const [category, setCategory] = useState<categoryType>({});
  const [products, setProducts] = useState<productType[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);

  const {category_id} = useParams();

  const links = ["home", "men", "new in"];

  const toggleViewMore = () => {
    setViewMore(prev => !prev);
  };

  useEffect(() => {
    const options = getOptions("0", category_id || "");

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCategory(response.data);
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleLoadMoreProducts = () => {
    setLoadingMore(true);

    const options = getOptions(`${products.length}`, category_id || "");

    axios
      .request(options)
      .then(function (response) {
        const newProducts = response.data.products;
        setProducts(prev => prev.concat(newProducts));
        setLoadingMore(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="products-component-container">
      <nav className="products-component-nav-links-container">
        <div className="nav-links-inner-container">
          {links.map((link, index) => {
            return (
              <div
                className={`each-link-container ${
                  index + 1 === links.length && "is-last-link"
                }`}
                key={index}
              >
                <p>{link}</p>
                <span>›</span>
              </div>
            );
          })}
        </div>
      </nav>

      <div className="products-component-products-description">
        <div className="products-description-inner-container">
          <h1>Men's New in</h1>

          <div
            className={`products-description-texts ${
              viewMore ? "view-more-description" : ""
            }`}
          >
            <div className="texts-container">
              <p>
                Looking for something new? Discover emerging trends, the latest
                clothing for men and the freshest new fits with our ASOS New In
                page. From sharp office shirts and suits to see you right
                through to 5PM, to the shorts, tees and vests that’ll keep you
                looking fresh– you can find the look here as soon as it lands.
                What’s more, our men’s new clothing selection includes all those
                accessory touches that make the difference, from laidback caps
                and timeless shades to boardroom-ready watches and belts. Expect
                fresh drops from sportswear authorities Nike and adidas
                Originals. If you’re after a style change up, you’ll find the
                best in men’s new clothing, shoes and accessories courtesy of
                our very own ASOS Design. Men’s denim doesn’t get much better
                than the likes of Topman, while brands like BOSS combine
                sophisticated prints with casual fits for a weekend-ready look.
              </p>
            </div>

            <div className="view-more-button-container">
              <span onClick={toggleViewMore}>
                {viewMore ? "View less" : "View more"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="products-other-links-container"></div>

      <div className="products-component-filter-container">
        <div className="products-filter-inner-container"></div>
      </div>

      <div className="products-component-products-listing-container">
        <div className="products-listing-inner-container">
          <div className="products-listing-number-container">
            <p>{category?.itemCount} styles found</p>
          </div>
          <div className="products-listing-each-product-container">
            {products.length > 0 &&
              products.map((item: productType) => {
                const product = {
                  id: item.id,
                  name: item.name,
                  imageUrl: item.imageUrl,
                  price: {
                    current: item.price.current,
                    previous: item.price.previous,
                    currency: item.price.currency,
                  },
                };
                return <EachProdcut key={item.id} product={product} />;
              })}
          </div>
        </div>
      </div>

      <div className="products-component-products-progress">
        <div className="products-progress-inner-container">
          <p>
            You've viewed {products.length} of {category?.itemCount} products
          </p>
          <progress
            max={category?.itemCount}
            value={products.length}
          ></progress>
        </div>
      </div>

      <div className="products-component-load-more-button-container">
        <div className="load-more-button" onClick={handleLoadMoreProducts}>
          <span>
            {loadingMore ? (
              <CircularProgress color="inherit" size={24} />
            ) : (
              "Load More"
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
