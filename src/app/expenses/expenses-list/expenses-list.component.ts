import { FormControl } from '@angular/forms';
import { Expense } from './../../Expense';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  @Input()
  expenses: Expense[] | null = [];

  @Output()
  search = new EventEmitter<string>();

  searchControl = new FormControl('');

  // searchValue$ = this.search
  //   .valueChanges
  //   .pipe(debounceTime(500))

  constructor() {
    this.searchControl.valueChanges.subscribe(v => this.search.emit(v));
  }

  ngOnInit(): void {
  }

  deleteExpense(e: Expense) {
    e.deleted = true;
  }

}
