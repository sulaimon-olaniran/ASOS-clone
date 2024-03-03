export type recentlyViewed = {
  id: number;
  name: string;
  image: string;
};

export type savedItem = {
  [key: string]: any;
  id?: number;
  name?: string;
  image?: string;
  media?: {
    images: {
      url: string;
    }[];

    catwalk: {
      url: string;
    }[];
  };
  variants?:
    | {
        [key: string]: any;
        brandSize?: string;
        colour?: string;
        isInStock?: boolean;
        isLowInStock?: boolean;
        isAvailable?: boolean;
      }[];
  colour?: string;
  isNoSize?: boolean;
  isOneSize?: boolean;
  selected_size?: string;
  category_id?: string;
  price?: {
    current: {
      text: string;
      value: number;
    };

    previous: {
      text: string;
      value: number;
    };
  };
};

export type bagItem = {
  [key: string]: any;
  id?: number;
  sub_id?: string;
  name?: string;
  image?: string;
  quantity?: number;
  variants?:
    | {
        [key: string]: any;
        brandSize?: string;
        colour?: string;
        isInStock?: boolean;
        isLowInStock?: boolean;
        isAvailable?: boolean;
      }[];
  colour?: string;
  isNoSize?: boolean;
  isOneSize?: boolean;
  selected_size?: string;
  category_id?: string;
  price?: {
    current: {
      text: string;
      value: number;
    };

    previous: {
      text: string;
      value: number;
    };
  };
};

export type facetFilterType = {
  [key: string]: string[];
  // attribute_1046: string[];
  // attribute_10992: string[];
  // priceMin: string[];
  // priceMax: string[];
  // attribute_10147: string[];
  // sort: string[];
  // base_colour: string[];
  // range: string[];
  // attribute_1047: string[];
  // attribute_10155: string[];
  // brand: string[];
  // size: string[];
};
