import {useState} from "react";
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
  const isViweMore = comment?.comment.length > 0 ? true : false;
  const [viewMore, setViewMore] = useState(isViweMore);

  const handleViewMore = () => {
    setViewMore(false);
  };

  return (
    <div className="reviews-comment-container">
      <div className="reviews-comment-header">
        <div className="comment-rating">
          <Rating defaultValue={comment?.rating} readOnly />
        </div>

        <span className="comment-time">{moment(comment?.time).fromNow()}</span>
      </div>

      <h4>{comment?.title}</h4>

      <div
        className={`comment-text-container ${!viewMore && "expand-comment"}`}
      >
        <p>{comment?.comment}</p>
        {viewMore && (
          <span className="read-more-button-container">
            <span />
            <div className="comment-read-more-button" onClick={handleViewMore}>
              Read more
            </div>
          </span>
        )}
      </div>
    </div>
  );
};

export default ReviewsComment;
