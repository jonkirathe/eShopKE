import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SearchComponent} from "../../search/search.component";
import {CartService} from "../../../services/cart.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  standalone: true,
  selector: "app-header",
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a class="navbar-brand mt-lg-0" href="#"><a
            style="background-image: linear-gradient(to right, darkblue , darkgoldenrod);
            font-weight: bold; font-size: 26px">eSHop</a>
            <a style="color: darkgoldenrod">KE</a>
          </a>
        </div>
        <div class="d-flex align-items-center">
          <!-- Icon -->
          <button (click)="setShowCart()" class="text-reset me-3 border-0">
            <span class="badge rounded-pill badge-notification bg-danger">{{totalItem}}</span>
            <i class="fa fa-shopping-cart"></i>
          </button>

        </div>
      </div>
    </nav>
  `,
  styles: [],
  imports: [RouterModule, CommonModule, NgOptimizedImage, SearchComponent],
})
export class HeaderComponent implements OnInit, OnDestroy {

  showCart: boolean = false;
  public totalItem: number = 0;
  private $unSubscribe = new Subject<void>();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getProducts().pipe(
      takeUntil(this.$unSubscribe)).subscribe((data) => {
      this.totalItem = data.length;
    });
  }

  setShowCart() {
    this.cartService.showCart.next(true);
  }

  ngOnDestroy(): void {
    this.$unSubscribe.next();
    this.$unSubscribe.complete();
  }
}
