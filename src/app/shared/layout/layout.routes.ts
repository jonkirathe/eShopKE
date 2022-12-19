import { Route } from "@angular/router";
import {importProvidersFrom} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {PRODUCT_STATE_NAME} from "../../store/product/product.selector";
import {productReducer} from "../../store/product/product.reducer";
import {ProductEffects} from "../../store/product/product.effects";

export const routes: Route[] = [
  {
    path: "dashboard",
    providers: [
      importProvidersFrom(
        // register feature reducer
        StoreModule.forFeature(PRODUCT_STATE_NAME, productReducer),
        // run feature effects
        EffectsModule.forFeature([ProductEffects])
      ),
    ],
    loadComponent: () => import("../../components/dashboard/dashboard.component").then((m) => m.DashboardComponent),
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
];

