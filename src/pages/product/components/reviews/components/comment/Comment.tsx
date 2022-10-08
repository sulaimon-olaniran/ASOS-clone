import Rating from "@mui/material/Rating";
import moment from "moment";

interface componentProps {
  comment: {
    title: string;
    time: string;
    rating: number;
    comment: string;
  };
}

const ReviewsComment = ({comment}: componentProps) => {
  const value = 4;

  return (
    <div className="reviews-comment-container">
      <div className="reviews-comment-header">
        <div className="comment-rating">
          <Rating defaultValue={comment?.rating} readOnly />
        </div>

        <span className="comment-time">{moment(comment?.time).fromNow()}</span>
      </div>

      <h4>{comment?.title}</h4>

      <div className="comment-text-container">
        <p>{comment?.comment}</p>
      </div>
    </div>
  );
};

export default ReviewsComment;
