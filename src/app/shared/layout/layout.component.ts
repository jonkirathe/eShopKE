import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./ui/header.component";
import {FooterComponent} from "./ui/footer.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  standalone: true,
  selector: "app-layout",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header></app-header>
    <div class="background m-3">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  imports: [RouterModule, HeaderComponent, FooterComponent, HttpClientModule],
})
export class LayoutComponent {}
