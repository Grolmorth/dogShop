import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailItemComponent } from './display-detail-item.component';

describe('DisplayDetailItemComponent', () => {
  let component: DisplayDetailItemComponent;
  let fixture: ComponentFixture<DisplayDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
