import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSelectPageComponent } from './item-select-page.component';

describe('ItemSelectPageComponent', () => {
  let component: ItemSelectPageComponent;
  let fixture: ComponentFixture<ItemSelectPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSelectPageComponent]
    });
    fixture = TestBed.createComponent(ItemSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
