import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuringPackingComponent } from './during-packing.component';

describe('DuringPackingComponent', () => {
  let component: DuringPackingComponent;
  let fixture: ComponentFixture<DuringPackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuringPackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuringPackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
