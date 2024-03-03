import {useState, useEffect} from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import {useParams} from "react-router-dom";

import EachProdcut from "./each-product/Each-Product";
import {categoryType, facetType, productType} from "./interface";
//import {} from "../../assets/types"
import {facetFilterType} from "../../assets/types";
import {rapid_api_key} from "../../assets/keys";
import {useAppSelector} from "../../assets/hooks";
import {
  FilterSelectComponent,
  FilterSelectMultipleComponent,
  FilterSelectColorComponent,
} from "../index";
import {TestIcon} from "../../assets/icons";

import data from "./products.json";

//TAKES ALL VALUES FROM EACH FILTER TYPE IN THE ARRAY AND COVERTS THEM INTO A SINGLE STRING FOR PARAMS OF THE API
const handleJoinIds = (obj: facetFilterType) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v.join()]));

const getOptions = (
  offset: string,
  category_id: string,
  filters: facetFilterType
) => {
  const filterOptions = handleJoinIds(filters);
  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: offset,
      categoryId: category_id,
      ...filterOptions,
      limit: "48",
      country: "US",
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
  const [productsFacets, setProductFacets] = useState<facetType[]>([]);
  const [fetching, setFetching] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [filters, setFilters] = useState<facetFilterType>({
    sort: ["freshness"],
  });

  const gender = useAppSelector(state => state.app.gender);

  const {category_id, type} = useParams();

  const links = ["home", gender, type?.replace("-", " ")];

  const toggleViewMore = () => {
    setViewMore(prev => !prev);
  };

  useEffect(() => {
    setFilters({
      sort: ["freshness"],
    });
  }, [category_id]);

  useEffect(() => {
    const options = getOptions("0", category_id || "", filters);
    // console.log(filters);

    setCategory(data);
    setProducts(data.products);
    setProductFacets(data.facets);

    return;
    setFetching(true);

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);

        setCategory(response.data);
        setProducts(response.data.products);
        setProductFacets(response.data.facets);
        setFetching(false);
      })
      .catch(function (error) {
        console.error(error);
        setFetching(false);
      });
  }, [category_id, filters]);

  const handleLoadMoreProducts = () => {
    setLoadingMore(true);

    const options = getOptions(
      `${products.length}`,
      category_id || "",
      filters
    );

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

  const handleFilter = () => {
    console.log(filters);
  };

  if (fetching)
    return <div className="products-loading-container">Loading...</div>;
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
        <div className="products-filter-inner-container">
          <FilterSelectComponent
            title="Sort"
            options={[
              "Recommended",
              "What's new",
              "Price high to low",
              "Price low to high",
            ]}
            defaultOption="Recommended"
          />

          {productsFacets.map((item, index) => {
            return (
              <>
                {item.id === "base_colour" && (
                  <FilterSelectColorComponent
                    key={index}
                    title={item.name || ""}
                    options={item.facetValues}
                  />
                )}

                {item.id !== "base_colour" && (
                  <FilterSelectMultipleComponent
                    facetId={item.id || ""}
                    prevOptions={filters[item.id as keyof facetFilterType]}
                    key={index}
                    title={item.name || ""}
                    options={item.facetValues}
                    handleSelect={setFilters}
                  />
                )}
              </>
            );
          })}

          {/* <FilterSelectComponent
            title="Category"
            options={[
              "Jeans & Trousers (345)",
              "Suits & Tailoring (25)",
              "Tops & Bottoms (3)",
            ]}
            defaultOption="Jeans & Trousers (345)"
          />

          <FilterSelectMultipleComponent
            title="Multiple"
            options={[
              "Trousers (405)",
              "Leggings (83)",
              "Suit Trousers (53)",
              "Ski Pants (5)",
              "Blazers (41)",
              "Skirts (24)",
            ]}
            defaultOption="Jeans & Trousers (345)"
            searchable
          />

*/}
        </div>
      </div>

      <div className="products-component-products-listing-container">
        <div className="products-listing-inner-container">
          <div className="products-listing-number-container">
            <p>{category?.itemCount} styles found</p>
          </div>
          <div className="products-listing-each-product-container">
            {products.length > 0 &&
              products.map((product: productType) => {
                return (
                  <EachProdcut
                    key={product.id}
                    product={product}
                    category_id={category_id || ""}
                  />
                );
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
        <div
          className="load-more-button"
          //onClick={handleLoadMoreProducts}
          onClick={handleFilter}
        >
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
