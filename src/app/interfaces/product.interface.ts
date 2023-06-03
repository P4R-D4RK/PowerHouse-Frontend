export interface Product {
  _id?: string;
  name: string;
  category: string;
  description: string;
  providerPrice: number;
  unitPrice: number;
  existence: number;
  date: Date;
  brand: string;
  image: string;
}
