import {PRODUCT_STATE_NAME} from "./product/product.selector";
import {ProductState} from "./product/product.state";
import {productReducer} from "./product/product.reducer";

export interface AppState {
  [PRODUCT_STATE_NAME]: ProductState;
}

export const appReducer = {
  [PRODUCT_STATE_NAME]: productReducer,
};
