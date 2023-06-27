import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmComponentLibraryComponent } from './lm-component-library.component';

describe('LmComponentLibraryComponent', () => {
  let component: LmComponentLibraryComponent;
  let fixture: ComponentFixture<LmComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmComponentLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
