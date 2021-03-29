import { OnlyMeInterceptor } from './only-me.interceptor';
import { ExpenseService, FakeExpenseService } from './expense.service';
import { ExpensesModule } from './expenses/expenses.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeBe from '@angular/common/locales/nl-BE';
import { OnlyMeToggleComponent } from './only-me-toggle/only-me-toggle.component';

registerLocaleData(localeBe);

@NgModule({
  declarations: [
    AppComponent,
    OnlyMeToggleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ExpensesModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' },
    // { provide: ExpenseService, useClass: FakeExpenseService },
    { provide: HTTP_INTERCEPTORS, useClass: OnlyMeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
