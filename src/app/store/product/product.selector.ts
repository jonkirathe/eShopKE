import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductState} from "./product.state";
export const PRODUCT_STATE_NAME = 'product';

const getProductState = createFeatureSelector<ProductState>(PRODUCT_STATE_NAME);

export const selectAllProducts = createSelector(
  getProductState,
  (state: ProductState) => state.products
);
