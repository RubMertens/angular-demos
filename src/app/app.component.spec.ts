import { By } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ExpenseService, FakeExpenseService } from './expense.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ExpenseService, useClass: FakeExpenseService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render list and form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const list = fixture.debugElement.query(By.css('app-expenses-list'));
    const form = fixture.debugElement.query(By.css('app-expense-form'));

    expect(list).not.toBeNull();
    expect(form).not.toBeNull();
  });

  it('should use expenses from service', () => {
    const service: ExpenseService = TestBed.inject(ExpenseService);
    spyOn(service, 'all').and.callThrough();

    const fixture = TestBed.createComponent(AppComponent);
    const expenses = fixture.componentInstance.expenses;
    expect(service.all).toHaveBeenCalledTimes(1);
    expect(expenses).toHaveSize(3);

  });
});
