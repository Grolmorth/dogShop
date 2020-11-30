import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiejsceDoSpaniaComponent } from './miejsce-do-spania.component';

describe('MiejsceDoSpaniaComponent', () => {
  let component: MiejsceDoSpaniaComponent;
  let fixture: ComponentFixture<MiejsceDoSpaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiejsceDoSpaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiejsceDoSpaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
