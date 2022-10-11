import {useEffect, useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import {IconButton} from "@mui/material";

import {LikeButton} from "../../../../../components";
import {useAppDispatch, useAppSelector} from "../../../../../assets/hooks";
import {
  saveProduct,
  unsaveProduct,
} from "../../../../../state/actions-creator/product";
import {removeFromRecentlyViewed} from "../../../../../state/actions-creator/product";
import {rapid_api_key} from "../../../../../assets/keys";

interface componentProps {
  //item: string;
  http?: any;
  id: number;
}

type item = {
  [key: string]: any;
  media?: {
    images: {
      url: string;
    }[];
  };
};

const ViewedItem = ({id, http}: componentProps) => {
  const [item, setItem] = useState<item>({});

  const saved_products = useAppSelector(state => state.product.saved);
  const dispatch = useAppDispatch();

  const handleRemoveItemFromRecentlyViewed = () => {
    dispatch(removeFromRecentlyViewed(id));
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v3/detail",
      params: {id: `${id}`, lang: "en-US", currency: "USD"},
      headers: {
        "X-RapidAPI-Key": rapid_api_key,
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    setTimeout(() => {
      http
        .request(options)
        .then(function (response: any) {
          //console.log(response.data);
          setItem(response.data);
        })
        .catch(function (error: any) {
          console.error(error);
        });
    }, 1000);
  }, [id, http]);

  const toggleSaveProduct = () => {
    if (saved_products.includes(id)) {
      dispatch(unsaveProduct(id));
    } else {
      dispatch(saveProduct(id));
    }
  };

  return (
    <div className="recently-viewed-item-container">
      <img src={`https://${item?.media?.images[0].url}`} alt="" />

      <IconButton onClick={handleRemoveItemFromRecentlyViewed}>
        <CloseIcon />
      </IconButton>

      <div className="add-to-favorite-button-container">
        <LikeButton
          buttonAction={toggleSaveProduct}
          isLiked={saved_products.includes(id)}
        />
      </div>
    </div>
  );
};

export default ViewedItem;
