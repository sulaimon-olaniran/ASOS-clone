import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {CustomerRating, ReviewsComment, ReviewsOverall} from "../index";

const comments = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const stars = [5, 4, 3, 2, 1];

interface componentProps {
  openDrawer: boolean;
  handleCloseDrawer: () => void;
  handleOpenDrawer: () => void;
}

const ReviewsDrawer = ({
  openDrawer,
  handleCloseDrawer,
  handleOpenDrawer,
}: componentProps) => {
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
          <ReviewsOverall from="drawer" />

          <div className="drawer-section-rating-stats">
            {stars.map(star => {
              return (
                <div className="each-rating-stats-container" key={star}>
                  <span>{star} stars</span>

                  <div className="stats-representation-container">
                    <div style={{width: `${10 * star}%`}} />
                  </div>

                  <span>({star * 2})</span>
                </div>
              );
            })}
          </div>

          <div className="drawer-section-rating-container">
            <CustomerRating />
          </div>

          <div className="drawer-section-comments-container">
            {comments.map(comment => (
              <div className="each-comment-container" key={comment}>
                <ReviewsComment />
              </div>
            ))}

            <div className="reviews-drawer-bottom-container">
              <div className="reviews-comments-progress">
                <div className="reviews-progress-inner-container">
                  <p>
                    You've viewed {10} of {20} products
                  </p>
                  <progress max={20} value={10}></progress>
                </div>
              </div>

              <div className="reviews-drawer-view-more-button">
                <span>View More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default ReviewsDrawer;
