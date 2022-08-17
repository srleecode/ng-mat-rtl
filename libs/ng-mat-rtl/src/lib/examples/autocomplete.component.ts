import { Component } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'srleecode-test',
  template: `<form [formGroup]="form">
    <mat-form-field class="example-full-width" appearance="fill">
      <mat-label>Favorite food</mat-label>
      <input type="text" matInput formControlName="favoriteFood" [matAutocomplete]="auto" />
      <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
        <mat-option *ngFor="let option of foods" [value]="option">
          {{ option }}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
    <mat-form-field class="example-full-width" appearance="fill">
      <mat-label>Favorite car</mat-label>
      <input type="text" matInput formControlName="favoriteCar" [matAutocomplete]="auto" />
      <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
        <mat-option *ngFor="let option of cars" [value]="option">
          {{ option }}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  </form>`,
  imports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TestComponent {
  form: FormGroup;
  foods = ['Steak', 'Pizza', 'Tacos'];
  cars = ['Volvo', 'Saab', 'Mercedes'];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      favoriteFood: 'Steak',
      favoriteCar: 'Volvo',
    });
    this.form.get('favoriteCar')?.disable();
  }
}
