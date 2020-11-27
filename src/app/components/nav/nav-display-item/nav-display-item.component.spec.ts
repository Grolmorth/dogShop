import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDisplayItemComponent } from './nav-display-item.component';

describe('NavDisplayItemComponent', () => {
  let component: NavDisplayItemComponent;
  let fixture: ComponentFixture<NavDisplayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDisplayItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
