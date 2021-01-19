import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCenterComponent } from './cart-center.component';

describe('CartCenterComponent', () => {
  let component: CartCenterComponent;
  let fixture: ComponentFixture<CartCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
