import { TestBed } from '@angular/core/testing';

import { OnlyMeInterceptor } from './only-me.interceptor';

describe('OnlyRubenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      OnlyMeInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: OnlyMeInterceptor = TestBed.inject(OnlyMeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
