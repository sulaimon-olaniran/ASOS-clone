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
