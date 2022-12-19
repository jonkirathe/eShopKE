import {createReducer, on} from "@ngrx/store";
import {loadProducts, loadProductsSuccess, loadProductsFailure} from "./product.action";
import {initialState} from "./product.state";

export const productReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({ ...state, status: 'loading' })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: null,
    status: 'success',
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
