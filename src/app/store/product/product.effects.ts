import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, mergeMap, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {ApiService} from "../../services/api.service";
import {AppState} from "../app.state";
import { of, from } from 'rxjs';
import {loadProducts, loadProductsFailure, loadProductsSuccess} from "./product.action";
import {Product} from "../../models/product";

@Injectable()
export class ProductEffects {
  constructor(private api: ApiService, private store: Store<AppState>, private router: Router, private actions$: Actions) {
  }

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        from(this.api.getProducts()).pipe(
          map((products: Product[]) => loadProductsSuccess({ products: products })),
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )
  );
}
