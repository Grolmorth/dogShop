import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterShipmentComponent } from './after-shipment.component';

describe('AfterShipmentComponent', () => {
  let component: AfterShipmentComponent;
  let fixture: ComponentFixture<AfterShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
