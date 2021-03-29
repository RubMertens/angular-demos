import { Component } from '@angular/core';

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

  deleteExpense(e: any): void {
    e.deleted = true;
  }
}
