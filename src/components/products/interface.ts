export type productType = {
  id: number;
  name: string;
  imageUrl: string;
  price: {
    currency: string;
    current: {
      value: number;
      text: string;
    };
    previous: {
      value?: number;
      text?: string;
    };
  };
  [key: string]: any;
};

export type categoryType = {
  itemCount?: number;
  [key: string]: any;
};
