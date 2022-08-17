import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'srleecode-test',
  standalone: true,
  imports: [BrowserAnimationsModule, MatButtonModule, MatDialogModule],
  template: `<button mat-raised-button (click)="openDialog()">Open dialog</button>`,
})
export class TestComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogOverviewExampleDialogComponent);
  }
}

@Component({
  selector: 'srleecode-test-dialog',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  template: `<mat-form-field appearance="fill">
    <mat-label>Favorite Animal</mat-label>
    <input matInput [(ngModel)]="animal" />
  </mat-form-field>`,
})
export class DialogOverviewExampleDialogComponent {
  animal = 'koala';
}
