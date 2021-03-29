import { Expense } from '../Expense';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {

  @Output()
  addExpense = new EventEmitter<Expense>();

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

  submitHandler(): void {
    this.newExpenseForm.markAllAsTouched();
    if (this.newExpenseForm.invalid) { return; }
    this.addExpense.emit(
      {
        ...this.newExpenseForm.value,
        id: 0
      }
    );
  }

  constructor() { }

  ngOnInit(): void {
  }

}
