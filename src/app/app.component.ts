import { debounceTime, switchMap } from 'rxjs/operators';
import { ExpenseService } from './expenses/expense.service';
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Expense } from './expenses/Expense';
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


}
