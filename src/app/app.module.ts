import { CustomDirectivesModule } from './custom-directives/custom-directives.module';
import { ExpenseService, FakeExpenseService } from './expense.service';
import { ExpensesModule } from './expenses/expenses.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeBe from '@angular/common/locales/nl-BE';

registerLocaleData(localeBe);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ExpensesModule,
    CustomDirectivesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' },
    // { provide: ExpenseService, useClass: FakeExpenseService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
