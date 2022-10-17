import {savedItem, bagItem} from "../types";
import {v4 as uuidv4} from "uuid";

export const getPercentage = (prev: number, current: number) => {
  const difference = prev - current;

  const division = difference / prev;

  const percentage = Math.ceil(division * 100);

  return percentage;
};

export const returnSavedItem = (
  product: savedItem,
  selected_size: string,
  category_id: string
) => {
  // console.log("product", product);
  const item = {
    id: product.id || 0,
    sub_id: uuidv4(),
    name: product.name || "",
    selected_size: selected_size,
    image: (product.media && product.media.images[0].url) || "",
    price: {
      previous: {
        text: (product.price && product.price.previous.text) || "",
        value: (product.price && product.price.previous.value) || 0,
      },
      current: {
        text: (product.price && product.price.previous.text) || "",
        value: (product.price && product.price.previous.value) || 0,
      },
    },

    colour: product.variants && product.variants[0].colour,

    variants: product.variants,

    isNoSize: product.isNoSize || false,
    isOneSize: product.isOneSize || false,
    category_id: category_id,
  };

  return item;
};

export const returnBagItem = (
  product: bagItem,
  selected_size: string,
  category_id: string
) => {
  const item = {
    id: product.id || 0,
    sub_id: uuidv4(),
    name: product.name || "",
    quantity: 1,
    selected_size: selected_size,
    image: (product.media && product.media.images[0].url) || "",
    price: {
      previous: {
        text: (product.price && product.price.previous.text) || "",
        value: (product.price && product.price.previous.value) || 0,
      },
      current: {
        text: (product.price && product.price.previous.text) || "",
        value: (product.price && product.price.previous.value) || 0,
      },
    },

    colour: product.variants && product.variants[0].colour,

    variants: product.variants,

    isNoSize: product.isNoSize || false,
    isOneSize: product.isOneSize || false,
    category_id: category_id,
  };

  return item;
};
