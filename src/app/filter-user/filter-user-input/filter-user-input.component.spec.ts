import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUserInputComponent } from './filter-user-input.component';

describe('FilterUserInputComponent', () => {
  let component: FilterUserInputComponent;
  let fixture: ComponentFixture<FilterUserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterUserInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
