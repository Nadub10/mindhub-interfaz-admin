import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectViajesComponent } from './select-viajes.component';

describe('SelectViajesComponent', () => {
  let component: SelectViajesComponent;
  let fixture: ComponentFixture<SelectViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectViajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
