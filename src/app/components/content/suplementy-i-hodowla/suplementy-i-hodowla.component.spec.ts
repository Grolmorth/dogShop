import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementyIHodowlaComponent } from './suplementy-i-hodowla.component';

describe('SuplementyIHodowlaComponent', () => {
  let component: SuplementyIHodowlaComponent;
  let fixture: ComponentFixture<SuplementyIHodowlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplementyIHodowlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplementyIHodowlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
