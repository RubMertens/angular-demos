import { TestBed } from '@angular/core/testing';

import { ExpensesResolver } from './expenses.resolver';

describe('ExpensesResolver', () => {
  let resolver: ExpensesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExpensesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
