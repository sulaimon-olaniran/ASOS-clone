//import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {IconButton} from "@mui/material";

import {LikeButton} from "../../../../../components";
import {useAppDispatch, useAppSelector} from "../../../../../assets/hooks";
import {
  saveProduct,
  unsaveProduct,
} from "../../../../../state/actions-creator/product";
import {removeFromRecentlyViewed} from "../../../../../state/actions-creator/product";
import {recentlyViewed} from "../../../../../assets/types";
import {returnSavedItem} from "../../../../../assets/functions";

interface componentProps {
  //item: string;
  http?: any;
  item: recentlyViewed;
  cat_id: string;
}

const ViewedItem = ({item, cat_id}: componentProps) => {
  //const [item, setItem] = useState<productType>({});

  const saved_products = useAppSelector(state => state.product.saved);
  const gender = useAppSelector(state => state.app.gender);
  const dispatch = useAppDispatch();

  const handleRemoveItemFromRecentlyViewed = () => {
    dispatch(removeFromRecentlyViewed(item.id));
  };

  const link_product_name =
    item.name &&
    item.name
      .replace(" - ", " ")
      .replace(new RegExp(" ", "g"), "-")
      .toLocaleLowerCase();

  const link_path = `/${gender}/product/${link_product_name}/${item.id}/${cat_id}`;

  const toggleSaveProduct = () => {
    const isSaved = saved_products.some(product => item.id === product.id);
    const saved_item = returnSavedItem(item, "");
    if (isSaved) {
      dispatch(unsaveProduct(item.id || 0));
    } else {
      dispatch(saveProduct(saved_item));
    }
  };

  return (
    <div className="recently-viewed-item-container">
      <Link to={link_path} className="recently-viewed-item-link-container">
        <img src={`https://${item.image}`} alt="" />
      </Link>

      <IconButton onClick={handleRemoveItemFromRecentlyViewed}>
        <CloseIcon />
      </IconButton>

      <div className="add-to-favorite-button-container">
        <LikeButton
          buttonAction={toggleSaveProduct}
          isLiked={saved_products.some(product => item.id === product.id)}
        />
      </div>
    </div>
  );
};

export default ViewedItem;
