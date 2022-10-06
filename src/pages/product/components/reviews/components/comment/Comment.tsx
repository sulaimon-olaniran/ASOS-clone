import Rating from "@mui/material/Rating";

const ReviewsComment = () => {
  const value = 4;

  return (
    <div className="reviews-comment-container">
      <div className="reviews-comment-header">
        <div className="comment-rating">
          <Rating defaultValue={value} precision={0.5} readOnly />
        </div>

        <span className="comment-time">2 days ago</span>
      </div>

      <h4>Off White/Cream colour and slim fitting</h4>

      <div className="comment-text-container">
        <p>
          As many others have pointed out, the shoes are not white, theyre off
          white/cream colour. I have a slim foot and these were to slim even for
          me. I also encourage you to size up half a size. Other then that the
          shoes are nice. The quality seems okay and they look great. Ive had
          them for a month and there are no signs of wear. Considering the price
          point theyre pretty good.
        </p>
      </div>
    </div>
  );
};

export default ReviewsComment;
