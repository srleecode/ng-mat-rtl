import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  standalone: true,
  selector: 'srleecode-test',
  template: `<form [formGroup]="form">
    <mat-form-field appearance="fill">
      <mat-label>Company (disabled)</mat-label>
      <input matInput formControlName="company" />
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>First name</mat-label>
      <input matInput formControlName="firstName" />
    </mat-form-field>
  </form>`,
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TestComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      company: 'Company',
      firstName: 'Test',
    });
    this.form.get('company')?.disable();
  }
}
