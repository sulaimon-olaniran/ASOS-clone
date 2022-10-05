import Rating from "@mui/material/Rating";

const ReviewsComment = () => {
  const value = 4;

  return (
    <div className="reviews-comment-container">
      <div className="reviews-comment-header">
        <div className="comment-rating">
          <Rating defaultValue={value} precision={0.5} readOnly />
        </div>

        <div className="comment-time">
          <span>2 days ago</span>
        </div>
      </div>

      <h4>Off White/Cream colour and slim fitting</h4>

      <div></div>
    </div>
  );
};

export default ReviewsComment;
