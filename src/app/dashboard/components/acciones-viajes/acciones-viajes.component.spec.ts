import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesViajesComponent } from './acciones-viajes.component';

describe('AccionesViajesComponent', () => {
  let component: AccionesViajesComponent;
  let fixture: ComponentFixture<AccionesViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionesViajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
