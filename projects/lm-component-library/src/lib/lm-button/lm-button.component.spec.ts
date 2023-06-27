import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmButtonComponent } from './lm-button.component';

describe('LmButtonComponent', () => {
  let component: LmButtonComponent;
  let fixture: ComponentFixture<LmButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
