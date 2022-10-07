import {useState} from "react";

import {
  ReviewsOverall,
  CustomerRating,
  ReviewsComment,
  ReviewsDrawer,
} from "./components";

const ProductReviews = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
    console.log("Open Drawer");
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <div className="product-reviews-container">
      <div className="reviews-header-container">
        <h1>Reviews</h1>
      </div>

      <div className="reviews-sections-container">
        <section className="reviews-left-section">
          <ReviewsOverall />
          <CustomerRating />
        </section>
        <section className="reviews-right-section">
          <div className="reviews-section-header-container">
            <h1>Most Recent Review</h1>

            <ReviewsComment />
          </div>

          <div className="reviews-section-button-container">
            <button onClick={handleOpenDrawer}>View All Reviews</button>
          </div>

          <div className="reviews-disclaimer-container">
            <p>
              All reviews are verified by ASOS unless otherwise indicated. Where
              a review states 'originally posted' by one of our brand partners;
              this has not been verified by ASOS.
            </p>
          </div>
        </section>
      </div>

      <ReviewsDrawer
        openDrawer={openDrawer}
        handleOpenDrawer={handleOpenDrawer}
        handleCloseDrawer={handleCloseDrawer}
      />
    </div>
  );
};

export default ProductReviews;
