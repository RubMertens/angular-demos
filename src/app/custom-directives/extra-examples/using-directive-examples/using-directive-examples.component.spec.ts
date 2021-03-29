import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingDirectiveExamplesComponent } from './using-directive-examples.component';

describe('UsingDirectiveExamplesComponent', () => {
  let component: UsingDirectiveExamplesComponent;
  let fixture: ComponentFixture<UsingDirectiveExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingDirectiveExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingDirectiveExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
