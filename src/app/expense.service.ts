import { Injectable } from '@angular/core';
import { Expense } from './Expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: Expense[] = [
    {
      id: 1,
      description: 'new Iphone',
      amount: 1010,
      date: new Date(2020, 1, 1),
      deleted: false
    },
    {
      id: 2,
      description: 'Hotel bill',
      amount: 85,
      date: new Date(2020, 3, 12),
      deleted: false
    },
    {
      id: 3,
      description: 'Coffee',
      amount: 2.50,
      date: new Date(2021, 4, 9),
      deleted: false
    }
  ];

  all(): Expense[] {
    return this.expenses;
  }

  byId(id: number): Expense | undefined {
    return this.expenses.find(e => e.id === id);
  }

  add(e: Expense): void {
    this.expenses.push(e);
  }

  constructor() { }
}


export class FakeExpenseService implements Partial<ExpenseService> {
  private expenses: Expense[] = [
    { id: 0, description: 'fake one', amount: 999, date: new Date() },
    { id: 1, description: 'fake two', amount: 999, date: new Date() },
    { id: 2, description: 'fake three', amount: 999, date: new Date() },
  ];
  all() {
    return this.expenses;
  }
  add(e: Expense) {

  }
  byId(id: number) {
    return this.expenses.find(e => e.id == id);
  }
}
