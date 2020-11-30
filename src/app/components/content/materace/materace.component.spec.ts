import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateraceComponent } from './materace.component';

describe('MateraceComponent', () => {
  let component: MateraceComponent;
  let fixture: ComponentFixture<MateraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateraceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
