type Rate = {
  rate: number;
  count: number;
};

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: Rate;
}
