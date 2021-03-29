import { ExpensesModule } from './expenses.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Expense } from './Expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses$ = new ReplaySubject<Expense[]>();

  private readonly api: string = "http://localhost:3000/expenses";
  constructor(private http: HttpClient) {
    this.getAll();
  }

  private getAll() {
    this.http.get<Expense[]>(this.api)
      .subscribe(all => {
        return this.expenses$.next(all);
      });
  }

  all(): Observable<Expense[]> {
    return this.expenses$.asObservable();
  }

  byId(id: number): Expense | undefined {
    // return this.expenses.find(e => e.id === id);
    return undefined;
  }

  add(e: Expense): Observable<unknown> {
    return this.http.post(this.api, e)
      .pipe(tap(ret => { this.getAll() }))
  }

  search(value: string): Observable<Expense[]> {
    const params = new HttpParams();
    params.set("q", value);
    console.log("searching for", value, params);
    return this.http.get<Expense[]>(`${this.api}?q=${value}`)
  }
}


export class FakeExpenseService implements Partial<ExpenseService> {
  private expenses: Expense[] = [
    { id: 0, description: 'fake one', amount: 999, date: new Date() },
    { id: 1, description: 'fake two', amount: 999, date: new Date() },
    { id: 2, description: 'fake three', amount: 999, date: new Date() },
  ];
  all() {
    return of(this.expenses);
  }
  add(e: Expense) {
    return of([])
  }
  byId(id: number) {
    return this.expenses.find(e => e.id == id);
  }
}
