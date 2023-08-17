import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerDetailsComponent } from './update-customer-details.component';

describe('UpdateCustomerDetailsComponent', () => {
  let component: UpdateCustomerDetailsComponent;
  let fixture: ComponentFixture<UpdateCustomerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCustomerDetailsComponent]
    });
    fixture = TestBed.createComponent(UpdateCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
