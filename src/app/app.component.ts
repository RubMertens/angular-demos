import { debounceTime, switchMap } from 'rxjs/operators';
import { ExpenseService } from './expense.service';
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Expense } from './Expense';
import { combineLatest, merge, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  // get expenses(): Observable<Expense[]> {
  //   return this.expenseService.all();
  // }

  expenses: Observable<Expense[]>

  private searchSubject = new Subject<string>();

  constructor(private expenseService: ExpenseService) {
    this.expenses =
      merge(
        this.expenseService.all(),
        this.searchSubject
          .pipe(
            debounceTime(500),
            switchMap(search => this.expenseService.search(search))
          )
      )

  }

  searchExpenses(search: string) {
    this.searchSubject.next(search);
  }

  addExpense(newExpense: Expense): void {
    this.expenseService.add(newExpense)
      .subscribe()
      ;
  }
}
