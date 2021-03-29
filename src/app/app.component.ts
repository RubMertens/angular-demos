import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  expenses = [
    {
      description: 'new Iphone',
      amount: 1010,
      date: new Date(2020, 1, 1),
      deleted: false
    },
    {
      description: 'Hotel bill',
      amount: 85,
      date: new Date(2020, 3, 12),
      deleted: false
    },
    {
      description: 'Coffee',
      amount: 2.50,
      date: new Date(2021, 4, 9),
      deleted: false
    }
  ];

  newExpenseForm = new FormGroup({
    description: new FormControl('test', [Validators.required]),
    amount: new FormControl(2151, [Validators.required, Validators.min(0)]),
    date: new FormControl('', [Validators.required])
  });

  get amount(): AbstractControl {
    return this.newExpenseForm.get('amount')!;
  }

  get date(): AbstractControl {
    return this.newExpenseForm.get('date')!;
  }
  get description(): AbstractControl {
    return this.newExpenseForm.get('description')!;
  }

  searchValue = '';
  searchChanged(e: Event): void {
    this.searchValue = (e.target as HTMLInputElement).value;
  }

  deleteExpense(e: any): void {
    e.deleted = true;
  }

  addExpense(): void {
    console.log('handling submit of form');
    this.newExpenseForm.markAllAsTouched();
    if (this.newExpenseForm.invalid) { return; }
    this.expenses.push(this.newExpenseForm.value);
  }
}
