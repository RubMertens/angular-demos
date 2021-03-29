import { FormControl } from '@angular/forms';
import { Expense } from './../../Expense';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  @Input()
  expenses: Expense[] = [];

  search = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  deleteExpense(e: Expense) {
    e.deleted = true;
  }

}
