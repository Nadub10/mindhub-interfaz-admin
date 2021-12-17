import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectListaComponent } from './select-lista.component';

describe('SelectListaComponent', () => {
  let component: SelectListaComponent;
  let fixture: ComponentFixture<SelectListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
