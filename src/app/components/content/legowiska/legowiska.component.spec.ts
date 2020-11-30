import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegowiskaComponent } from './legowiska.component';

describe('LegowiskaComponent', () => {
  let component: LegowiskaComponent;
  let fixture: ComponentFixture<LegowiskaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegowiskaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegowiskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
