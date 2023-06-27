import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmHeaderComponent } from './lm-header.component';

describe('LmHeaderComponent', () => {
  let component: LmHeaderComponent;
  let fixture: ComponentFixture<LmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
