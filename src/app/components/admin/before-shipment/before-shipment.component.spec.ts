import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeShipmentComponent } from './before-shipment.component';

describe('BeforeShipmentComponent', () => {
  let component: BeforeShipmentComponent;
  let fixture: ComponentFixture<BeforeShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
