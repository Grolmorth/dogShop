import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudyComponent } from './budy.component';

describe('BudyComponent', () => {
  let component: BudyComponent;
  let fixture: ComponentFixture<BudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
