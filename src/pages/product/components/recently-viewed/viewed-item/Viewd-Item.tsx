import CloseIcon from "@mui/icons-material/Close";
import {IconButton} from "@mui/material";

import {LikeButton} from "../../../../../components";

const ViewedItem = () => {
  return (
    <div className="recently-viewed-item-container">
      <img
        src="https://images.asos-media.com/products/asos-design-tall-lace-insert-corset-midi-dress-in-black/203036054-1-black?$n_320w$&wid=317&fit=constrain"
        alt=""
      />

      <IconButton>
        <CloseIcon />
      </IconButton>

      <div className="add-to-favorite-button-container">
        <LikeButton
          buttonAction={() => console.log("hello world")}
          isLiked={false}
        />
      </div>
    </div>
  );
};

export default ViewedItem;
