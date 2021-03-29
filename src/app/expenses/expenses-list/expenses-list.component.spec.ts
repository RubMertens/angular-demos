import { CustomPipesModule } from './../../custom-pipes/custom-pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesListComponent } from './expenses-list.component';
import { By } from '@angular/platform-browser';

describe('ExpensesListComponent', () => {
  let component: ExpensesListComponent;
  let fixture: ComponentFixture<ExpensesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesListComponent],
      imports: [ReactiveFormsModule, CustomPipesModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display items', () => {
    component.expenses = [
      {
        id: 0,
        description: 'test one',
        amount: 100,
        date: new Date(),
      },
      {
        id: 0,
        description: 'test one',
        amount: 100,
        date: new Date(),
      }
    ];
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('tbody tr'))).toHaveSize(2);
  });
});
