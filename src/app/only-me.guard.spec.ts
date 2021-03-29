import { TestBed } from '@angular/core/testing';

import { OnlyMeGuard } from './only-me.guard';

describe('OnlyMeGuard', () => {
  let guard: OnlyMeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyMeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
