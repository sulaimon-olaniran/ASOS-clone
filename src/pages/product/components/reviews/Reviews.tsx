import {ReviewsOverall, CustomerRating} from "./components";

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
          </div>

          <div className="reviews-section-button-container">
            <button>View All Reviews</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductReviews;
