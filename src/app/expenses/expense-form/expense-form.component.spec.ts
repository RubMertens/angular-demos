import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseFormComponent } from './expense-form.component';
import { By } from '@angular/platform-browser';

describe('ExpenseFormComponent', () => {
  let component: ExpenseFormComponent;
  let fixture: ComponentFixture<ExpenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseFormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit Expense when form is valid', () => {
    spyOn(component.addExpense, 'emit');
    component.description.setValue('test');
    component.amount.setValue(100);
    component.date.setValue(new Date());
    component.submitHandler();
    fixture.detectChanges();
    expect(component.addExpense.emit).toHaveBeenCalled();
  });

  it('should not emit when form not valid', () => {
    spyOn(component.addExpense, 'emit');
    component.description.setValue('test');
    component.amount.setValue(-100);
    component.date.setValue(new Date());
    component.submitHandler();
    fixture.detectChanges();
    expect(component.addExpense.emit).not.toHaveBeenCalled();
    const feedback = fixture.debugElement.query(By.css("#amount")).parent?.query(By.css(".text-danger"));
    expect(feedback?.nativeElement.innerText).toContain("amount");
  });
});
