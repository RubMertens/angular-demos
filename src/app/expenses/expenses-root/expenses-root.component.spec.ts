import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesRootComponent } from './expenses-root.component';

describe('ExpensesRootComponent', () => {
  let component: ExpensesRootComponent;
  let fixture: ComponentFixture<ExpensesRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
