export type productType = {
  id?: number;
  name: string;
  imageUrl: string;
  price: {
    currency: string;
    current: {
      value: number | null;
      text: string;
    };
    previous: {
      value?: number | null;
      text?: string;
    };
  };
  [key: string]: any;
};

export type categoryType = {
  itemCount?: number;
  [key: string]: any;
};

export type facetType = {
  name?: string;
  id?: string;
  displayStyle?: string;
  facetValues: {
    count: number;
    id: string;
    name: string;
    isSelected: boolean;
  }[];
  [key: string]: any;
};
