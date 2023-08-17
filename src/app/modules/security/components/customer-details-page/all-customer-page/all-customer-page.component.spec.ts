import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomerPageComponent } from './all-customer-page.component';

describe('AllCustomerPageComponent', () => {
  let component: AllCustomerPageComponent;
  let fixture: ComponentFixture<AllCustomerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCustomerPageComponent]
    });
    fixture = TestBed.createComponent(AllCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
