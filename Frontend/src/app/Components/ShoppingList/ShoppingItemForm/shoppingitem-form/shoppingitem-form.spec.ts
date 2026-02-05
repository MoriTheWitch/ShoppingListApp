import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingitemForm } from './shoppingitem-form';

describe('ShoppingitemForm', () => {
  let component: ShoppingitemForm;
  let fixture: ComponentFixture<ShoppingitemForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingitemForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingitemForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
