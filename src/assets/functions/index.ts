import {savedItem} from "../types";

export const getPercentage = (prev: number, current: number) => {
  const difference = prev - current;

  const division = difference / prev;

  const percentage = Math.ceil(division * 100);

  return percentage;
};

export const returnSavedItem = (product: savedItem, selected_size: string) => {
  // console.log("product", product);
  const item = {
    id: product.id || 0,
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
  };

  return item;
};
