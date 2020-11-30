import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmaMokraComponent } from './karma-mokra.component';

describe('KarmaMokraComponent', () => {
  let component: KarmaMokraComponent;
  let fixture: ComponentFixture<KarmaMokraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarmaMokraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarmaMokraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
