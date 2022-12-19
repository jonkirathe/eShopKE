import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Product} from "../../models/product";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-dark justify-content-center text-light p-2 ">
      <span>Filter: </span>
      <input type="radio" name="filter" value="All"
             [(ngModel)]="selectedRadioButtonValue"
             (change)="onRadioButtonChanged()">
      <span class="p-2">{{'All Products('+all+')'}}</span>

      <input type="radio" name="filter" value="clothing"
             [(ngModel)]="selectedRadioButtonValue"
             (change)="onRadioButtonChanged()">
      <span class="p-2">{{'Clothing('+clothing+')'}}</span>

      <input type="radio" name="filter" value="jewelery"
             [(ngModel)]="selectedRadioButtonValue"
             (change)="onRadioButtonChanged()">
      <span class="p-2">{{'Jewelery('+jewelery+')'}}</span>

      <input type="radio" name="filter" value="electronics"
             [(ngModel)]="selectedRadioButtonValue"
             (change)="onRadioButtonChanged()">
      <span class="p-2">{{'Electronics('+electronics+')'}}</span>
    </div>
  `,
  styles: [
  ]
})
export class CategoryComponent {
  @Input() all: number = 0;
  @Input() clothing = 0;
  @Input() jewelery = 0;
  @Input() electronics = 0;

  @Input() products!: Product[];

  selectedRadioButtonValue: string = 'All';

  @Output()
  radioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonChanged(){
    this.radioButtonChanged.emit(this.selectedRadioButtonValue);
  }

}
