import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmSearchBarComponent } from './lm-search-bar.component';

describe('LmSearchBarComponent', () => {
  let component: LmSearchBarComponent;
  let fixture: ComponentFixture<LmSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
