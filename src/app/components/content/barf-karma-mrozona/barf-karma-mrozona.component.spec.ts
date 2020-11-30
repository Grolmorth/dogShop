import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarfKarmaMrozonaComponent } from './barf-karma-mrozona.component';

describe('BarfKarmaMrozonaComponent', () => {
  let component: BarfKarmaMrozonaComponent;
  let fixture: ComponentFixture<BarfKarmaMrozonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarfKarmaMrozonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarfKarmaMrozonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
