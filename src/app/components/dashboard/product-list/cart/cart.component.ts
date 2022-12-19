import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  TableComponent,
  TableHeaderTemplateDirective,
  TableRowTemplateDirective
} from "../../../../shared/table/table.component";
import {Product} from "../../../../models/product";
import {CartService} from "../../../../services/cart.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  template: `
    <ng-container *ngIf="cartItems.length !=0">
      <div class="cart">
        <div class="card">
          <div class="cart-body">
            <app-table [data]="cartItems">
              <ng-template [appTableHeader]="cartItems" let-header>
                <tr>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Price</th>
                </tr>
              </ng-template>
              <ng-template [appTableRow]="cartItems" let-row>
                <td>{{row.title}}</td>
                <td><img style="width: 60px;" src="{{row.image}}" alt=""></td>
                <td style="width: 12%;">{{row.price | currency:'Kshs ':'symbol':'2.1-2'}}</td>
                <td>
                  <button (click)="removeItem(row)" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                </td>
              </ng-template>
            </app-table>
           <div class="row p-2">
             <strong class="total p-2">Total Cost: {{total | currency:'Kshs ':'symbol':'2.1-2'}}</strong>
             <div class="col-7">
               <button (click)="setShowCart()" class="btn btn-primary">Continue Shopping</button>
             </div>
             <div class="col-5">
               <button (click)="emptyCart()" class="btn btn-danger">Empty Cart</button>
             </div>
           </div>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="cartItems.length ==0">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">My Shopping Cart</h5>
        </div>
        <div class="card-body center">
          <h4>Cart is empty!</h4>
          <button (click)="setShowCart()" class="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </ng-container>
  `,
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, TableComponent, TableHeaderTemplateDirective, TableRowTemplateDirective],
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: Product[] = [];
  public total !: number;
  private $unSubscribe = new Subject<void>();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getProducts().pipe(
      takeUntil(this.$unSubscribe)).subscribe((data) => {
      this.cartItems = data;
    });
    this.total = this.cartService.getTotalPrice();
    console.log(this.total)
  }

  setShowCart() {
    this.cartService.showCart.next(false);
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

  ngOnDestroy(): void {
    this.$unSubscribe.next();
    this.$unSubscribe.complete();
  }
}
