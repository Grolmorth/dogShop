import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoduszkiComponent } from './poduszki.component';

describe('PoduszkiComponent', () => {
  let component: PoduszkiComponent;
  let fixture: ComponentFixture<PoduszkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoduszkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoduszkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
