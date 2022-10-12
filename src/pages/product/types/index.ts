export interface productMedia {
  images: {url: string}[];
  catwalk: {url: string}[];
}

export interface productRating {
  averageOverallRating: number;
  averageOverallStarRating: number;
  totalReviewCount: number;
}

export interface productInfo {
  aboutMe: string;
  sizeAndFit: string;
  careInfo: string;
}

export interface productPrice {
  current: {
    value: number;
    text: string;
  };

  previous: {
    value: number;
    text: string;
  };
}

export interface productBrand {
  name: string;
  description: string;
}

export interface productVariant {
  [key: string]: any;
  brandSize?: string;
  colour?: string;
  isInStock?: boolean;
  isLowInStock?: boolean;
  isAvailable?: boolean;
}

export type productType = {
  [key: string]: any;
  media?: productMedia;
  id?: number;
  name?: string;
  description?: string;
  variants?: productVariant[];
  info?: productInfo;
  price?: productPrice;
  brand?: productBrand;
  rating?: productRating | null;
  isInStock?: boolean;
  isNoSize?: boolean;
  isOneSize?: boolean;
};
