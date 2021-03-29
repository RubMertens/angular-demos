import { ExpenseService } from './expense.service';
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Expense } from './Expense';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get expenses(): Expense[] {
    return this.expenseService.all();
  }

  constructor(private expenseService: ExpenseService) {

  }

  addExpense(newExpense: Expense): void {
    this.expenseService.add(newExpense);
  }
}
