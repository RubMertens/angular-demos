import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyMeToggleComponent } from './only-me-toggle.component';

describe('OnlyMeToggleComponent', () => {
  let component: OnlyMeToggleComponent;
  let fixture: ComponentFixture<OnlyMeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyMeToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyMeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
