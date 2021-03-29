import { take, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Expense } from './expenses/Expense';
import { ExpenseService } from './expenses/expense.service';

@Injectable({
  providedIn: 'root'
})
export class ExpensesResolver implements Resolve<Expense[]> {

  constructor(private expenseService: ExpenseService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Expense[]> {
    return this.expenseService.all()
      .pipe(take(1));

  }
}
