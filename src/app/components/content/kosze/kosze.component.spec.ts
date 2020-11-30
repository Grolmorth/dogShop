import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoszeComponent } from './kosze.component';

describe('KoszeComponent', () => {
  let component: KoszeComponent;
  let fixture: ComponentFixture<KoszeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoszeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoszeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
