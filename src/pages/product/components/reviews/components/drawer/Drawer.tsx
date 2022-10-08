import {useState} from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {CustomerRating, ReviewsComment, ReviewsOverall} from "../index";

const stars = [5, 4, 3, 2, 1];

interface componentProps {
  openDrawer: boolean;
  handleCloseDrawer: () => void;
  handleOpenDrawer: () => void;
  review: {
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
}

const ReviewsDrawer = ({
  openDrawer,
  handleCloseDrawer,
  handleOpenDrawer,
  review,
}: componentProps) => {
  const [slice, setSlice] = useState(10);
  const [comments, setComments] = useState(review.comments.slice(0, 10));

  const handleViewMoreComments = () => {
    const newComments = review.comments.slice(slice, slice + 10);
    setSlice(prev => prev + 10);

    setComments(prev => prev.concat(newComments));
  };

  const getPercentage = (num: number, total: number) => {
    const ratio = num / total;
    const percentage = ratio * 100;

    return percentage;
  };

  return (
    <SwipeableDrawer
      open={openDrawer}
      anchor="right"
      onClose={handleCloseDrawer}
      onOpen={handleOpenDrawer}
      transitionDuration={500}
    >
      <div className="reviews-drawer-container">
        <div className="reviews-drawer-header-container">
          <h1>Reviews</h1>

          <IconButton onClick={handleCloseDrawer}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className="reviews-drawer-body-container">
          <ReviewsOverall from="drawer" review={review} />

          <div className="drawer-section-rating-stats">
            {stars.map(star => {
              const star_comments = review.comments.filter(
                item => item.rating === star
              );

              const percentage = getPercentage(
                star_comments.length,
                review.comments.length
              );

              return (
                <div className="each-rating-stats-container" key={star}>
                  <span>{star} stars</span>

                  <div className="stats-representation-container">
                    <div style={{width: `${percentage}%`}} />
                  </div>

                  <span>({star_comments.length})</span>
                </div>
              );
            })}
          </div>

          <div className="drawer-section-rating-container">
            <CustomerRating customer_rating={review?.customer_rating} />
          </div>

          <div className="drawer-section-comments-container">
            {comments.slice(0, slice).map(comment => (
              <div className="each-comment-container" key={comment.id}>
                <ReviewsComment comment={comment} />
              </div>
            ))}

            <div className="reviews-drawer-bottom-container">
              <div className="reviews-comments-progress">
                <div className="reviews-progress-inner-container">
                  <p>
                    You've viewed {comments.length} of {review.comments.length}{" "}
                    reviews
                  </p>
                  <progress max={review.comments.length} value={10}></progress>
                </div>
              </div>

              {comments.length !== review.comments.length && (
                <div
                  className="reviews-drawer-view-more-button"
                  onClick={handleViewMoreComments}
                >
                  <span>View More</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default ReviewsDrawer;
