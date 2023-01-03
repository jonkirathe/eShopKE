import {provideRouter, Route} from "@angular/router";
import {AppComponent} from "./app/app.component";
import {bootstrapApplication} from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";
import {provideEffects, provideRouterStore, provideStore, provideStoreDevtools} from "./app/standalone-ngrx";
import {routerReducer} from "@ngrx/router-store";

const appRoutes: Route[] = [
  {
    path: "",
    loadComponent: () => import("./app/shared/layout/layout.component").then((m) => m.LayoutComponent),
    loadChildren: () => import("./app/shared/layout/layout.routes").then((m) => m.routes),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore({ router: routerReducer }),
    provideRouterStore(),
    provideStoreDevtools(),
    provideEffects(),
    /*provideStore({ }),
    // alternative to `StoreRouterConnectingModule.forRoot`
    provideRouterStore(),
    // alternative to `StoreDevtoolsModule.instrument`
    provideStoreDevtools(),
    // alternative to `EffectsModule.forRoot`
    provideEffects([]),*/
  ] }).catch((err) =>
  console.log(err)
);
