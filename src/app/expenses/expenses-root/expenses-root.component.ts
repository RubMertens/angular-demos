import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { Expense } from 'src/app/expenses/Expense';
import { ExpenseService } from 'src/app/expenses/expense.service';

@Component({
  selector: 'app-expenses-root',
  templateUrl: './expenses-root.component.html',
  styleUrls: ['./expenses-root.component.scss']
})
export class ExpensesRootComponent implements OnInit {

  expenses: Observable<Expense[]>;

  private searchSubject = new Subject<string>();

  constructor(private expenseService: ExpenseService, private route: ActivatedRoute) {
    console.log('constructig component');
    this.expenses =
      merge(
        // this.expenseService.all(),
        this.route.data.pipe(map(data => {
          console.log('in compoent');
          return data.expenses;
        })),
        this.searchSubject
          .pipe(
            debounceTime(500),
            switchMap(search => this.expenseService.search(search))
          )
      );

  }

  searchExpenses(search: string) {
    this.searchSubject.next(search);
  }

  addExpense(newExpense: Expense): void {
    this.expenseService.add(newExpense)
      .subscribe()
      ;
  }

  ngOnInit(): void {
  }

}
