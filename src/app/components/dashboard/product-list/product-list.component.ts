import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from "../../../models/product";
import {CategoryComponent} from "../../../shared/category/category.component";
import {CardComponent} from "../../../shared/card/card.component";
import {SearchComponent} from "../../../shared/search/search.component";
import {SearchDirective} from "../../../directives/search.directive";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {selectAllProducts} from "../../../store/product/product.selector";
import {loadProducts} from "../../../store/product/product.action";

@Component({
  selector: 'app-product-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CategoryComponent, CardComponent, SearchComponent, SearchDirective],
  encapsulation: ViewEncapsulation.None, //while using None all child comp will use this css style
  template: `
    <app-category (radioButtonChanged)="radioButtonChanged($event)">
    </app-category>
    <div class="container">
      <div class="row justify-content-center p-2">
        <div class="col-6">
          <app-search (searchValueChanged)="onSearchValueChanged($event)"></app-search>
        </div>
      </div>
    </div>
    <div class="row" align="center">
      <ng-container *ngFor="let product of $products | async ">
        <ng-container *ngIf="selectedRadioButtonValue === 'All' || selectedRadioButtonValue === product.category">
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2"
             *ngIf="searchValue === '' || product.title.toLowerCase().includes(searchValue)">
          <app-card [product]="product"></app-card>
        </div>
        </ng-container>
      </ng-container>
    </div>
  `,
  styles: [],
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  $products = this.store.select(selectAllProducts);
  selectedRadioButtonValue: string = 'All';
  searchValue: string = '';
 constructor(private store: Store<AppState>) {
 }
  radioButtonChanged(value: string) {
    this.selectedRadioButtonValue = value;
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  onSearchValueChanged(value: string) {
    this.searchValue = value;
  }
}
