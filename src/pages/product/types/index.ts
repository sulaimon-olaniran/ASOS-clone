export interface productMedia {
  images: {url: string}[];
  catwalk: {url: string}[];
}

export interface productRating {
  averageOverallRating: number;
  averageOverallStarRating: number;
  totalReviewCount: number;
}

export type productType = {
  [key: string]: any;
};
