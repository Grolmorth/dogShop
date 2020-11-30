import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoceComponent } from './koce.component';

describe('KoceComponent', () => {
  let component: KoceComponent;
  let fixture: ComponentFixture<KoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
