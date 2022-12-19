import {Product} from "../../models/product";

export interface ProductState {
  products: Product[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProductState = {
  products: [],
  error: null,
  status: 'pending',
}
