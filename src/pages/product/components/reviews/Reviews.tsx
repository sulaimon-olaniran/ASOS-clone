import {useState} from "react";

import {
  ReviewsOverall,
  CustomerRating,
  ReviewsComment,
  ReviewsDrawer,
} from "./components";

import reviews from "../../../../assets/data/reviews.json";

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const reviewIndex = getRandomInt(0, 49);

type review = {
  [key: string]: any;
  id: number;
  customer_rating: {
    size: number | null;
    comfort: number | null;
    quality: number | null;
  };

  recommended_by: number;
  comments: {
    title: string;
    comment: string;
    id: string;
    time: string;
    rating: number;
  }[];
};

const ProductReviews = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [review, setReview] = useState<review>(reviews[reviewIndex]);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
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
          <ReviewsOverall review={review} />
          <CustomerRating customer_rating={review?.customer_rating} />
        </section>
        <section className="reviews-right-section">
          <div className="reviews-section-header-container">
            <h1>Most Recent Review</h1>

            <ReviewsComment comment={review?.comments[0]} />
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
        review={review}
      />
    </div>
  );
};

export default ProductReviews;
