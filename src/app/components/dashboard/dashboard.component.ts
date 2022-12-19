import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import {CategoryComponent} from "../../shared/category/category.component";
import {CartComponent} from "./product-list/cart/cart.component";
import {CartService} from "../../services/cart.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProductListComponent, CategoryComponent, CartComponent],
  template: `
    <div class="dashboard-container">
      <ng-container *ngIf="!showCart; else withCart">
        <h2>Products</h2>
        <app-product-list></app-product-list>
      </ng-container>
      <ng-template #withCart>
        <div class="display-cart row">
          <div class="products col-9">
            <h2 class="">Products</h2>
            <app-product-list></app-product-list>
          </div>
          <div class="cart col-3">
            <app-cart ></app-cart>
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  showCart: boolean = false;
  private $unSubscribe = new Subject<void>();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.showCart.pipe(
      takeUntil(this.$unSubscribe)).subscribe((data) => {
      this.showCart = data;
    });
  }

  ngOnDestroy(): void {
    this.$unSubscribe.next();
    this.$unSubscribe.complete();
  }
}
