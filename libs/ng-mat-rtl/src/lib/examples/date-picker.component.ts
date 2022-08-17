import { Component } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'srleecode-test',
  template: `
    <form [formGroup]="form">
      <mat-form-field appearance="fill">
        <mat-label>Start date</mat-label>
        <input formControlName="start" matInput [matDatepicker]="dp1" />
        <mat-datepicker-toggle matSuffix [for]="dp1"></mat-datepicker-toggle>
        <mat-datepicker #dp1></mat-datepicker>
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>End date</mat-label>
        <input formControlName="end" matInput [matDatepicker]="dp2" />
        <mat-datepicker-toggle matSuffix [for]="dp2"></mat-datepicker-toggle>
        <mat-datepicker #dp2></mat-datepicker>
      </mat-form-field>
    </form>
  `,
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TestComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      start: new Date(2022, 11, 31),
      end: new Date(2023, 11, 31),
    });
    this.form.get('start')?.disable();
  }
}
