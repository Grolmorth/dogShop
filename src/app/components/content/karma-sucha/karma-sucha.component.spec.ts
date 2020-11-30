import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmaSuchaComponent } from './karma-sucha.component';

describe('KarmaSuchaComponent', () => {
  let component: KarmaSuchaComponent;
  let fixture: ComponentFixture<KarmaSuchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarmaSuchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarmaSuchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
