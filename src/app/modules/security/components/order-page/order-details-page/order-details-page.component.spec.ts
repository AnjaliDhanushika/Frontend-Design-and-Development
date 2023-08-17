import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsPageComponent } from './order-details-page.component';

describe('OrderDetailsPageComponent', () => {
  let component: OrderDetailsPageComponent;
  let fixture: ComponentFixture<OrderDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailsPageComponent]
    });
    fixture = TestBed.createComponent(OrderDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
