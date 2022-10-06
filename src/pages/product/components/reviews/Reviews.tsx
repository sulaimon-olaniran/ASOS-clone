import {ReviewsOverall, CustomerRating, ReviewsComment} from "./components";

const ProductReviews = () => {
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
            <button>View All Reviews</button>
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
    </div>
  );
};

export default ProductReviews;
