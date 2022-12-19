import {createAction, props} from "@ngrx/store";
import {Product} from "../../models/product";

export const LOAD_PRODUCTS_SUCCESS = '[products page] load products success';
export const LOAD_PRODUCTS = '[products page] load products';
export const LOAD_PRODUCTS_FAIL = '[products page] load products fail';

export const loadProducts = createAction(LOAD_PRODUCTS);

export const loadProductsSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  LOAD_PRODUCTS_FAIL,
  props<{ error: string }>()
);
