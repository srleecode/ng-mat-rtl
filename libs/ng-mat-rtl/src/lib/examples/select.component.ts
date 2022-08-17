import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  standalone: true,
  selector: 'srleecode-test',
  template: `<form [formGroup]="form">
    <mat-form-field appearance="fill">
      <mat-label>Favorite food</mat-label>
      <mat-select formControlName="favoriteFood">
        <mat-option *ngFor="let food of foods" [value]="food.value">
          {{ food.viewValue }}
        </mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Favorite car</mat-label>
      <mat-select formControlName="favoriteCar">
        <mat-option *ngFor="let car of cars" [value]="car.value">
          {{ car.viewValue }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  </form>`,
  imports: [
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TestComponent {
  form: FormGroup;
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  cars = [
    { value: 'volvo', viewValue: 'Volvo' },
    { value: 'saab', viewValue: 'Saab' },
    { value: 'mercedes', viewValue: 'Mercedes' },
  ];
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      favoriteFood: 'steak-0',
      favoriteCar: 'volvo',
    });
    this.form.get('favoriteCar')?.disable();
  }
}
