import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-footer",
  template: `
    <footer class="footer mt-auto py-3 bg-dark">
      <div class="container align-content-center align-items-center justify-content-center">
        <span class="text-light ">
        © 2022
        <a class="hover:underline">eShopKE(eSKE) Ltd</a>
      </span>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
