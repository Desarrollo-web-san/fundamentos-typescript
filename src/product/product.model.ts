export type Size = 'S' | 'M' | 'L';

export type Product = {
  title: string;
  price: number;
  description: string;
  stock: number;
  size?: Size;
};
