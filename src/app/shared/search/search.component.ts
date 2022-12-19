import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SearchDirective} from "../../directives/search.directive";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchDirective],
  template: `
          <form  class="d-flex input-group w-auto">
            <input  myHighlight (action)="getAction($event)"
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              [(ngModel)]="searchValue"
              (input)="onSearchValueChanged()"
              [ngModelOptions]="{standalone: true}"
            />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
          </form>
          <p class="text-danger">{{ message }}</p>
  `,
  styles: [
  ]
})
export class SearchComponent {
  searchValue: string = '';
  public message!: string;
  @Output()
  searchValueChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchValueChanged() {
    this.searchValueChanged.emit(this.searchValue);
  }

  getAction($event: any) {
    this.message = $event;
  }
}
