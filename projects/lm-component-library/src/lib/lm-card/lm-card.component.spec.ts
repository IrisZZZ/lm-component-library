import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmCardComponent } from './lm-card.component';

describe('LmCardComponent', () => {
  let component: LmCardComponent;
  let fixture: ComponentFixture<LmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
