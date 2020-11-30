import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzekaskiINapojeComponent } from './przekaski-i-napoje.component';

describe('PrzekaskiINapojeComponent', () => {
  let component: PrzekaskiINapojeComponent;
  let fixture: ComponentFixture<PrzekaskiINapojeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrzekaskiINapojeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzekaskiINapojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
