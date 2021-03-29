import { ExpensesRoutingModule } from './expenses-routing.module';
import { CustomDirectivesModule } from './../custom-directives/custom-directives.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipesModule } from './../custom-pipes/custom-pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpensesRootComponent } from './expenses-root/expenses-root.component';



@NgModule({
  declarations: [ExpensesListComponent, ExpenseFormComponent, ExpensesRootComponent],
  imports: [
    CommonModule,
    CustomPipesModule,
    ReactiveFormsModule,
    CustomDirectivesModule,
    ExpensesRoutingModule
  ],
  // exports: [ExpensesRootComponent]
})
export class ExpensesModule { }
