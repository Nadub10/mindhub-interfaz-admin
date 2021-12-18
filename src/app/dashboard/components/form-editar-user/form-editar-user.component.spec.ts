import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarUserComponent } from './form-editar-user.component';

describe('FormEditarUserComponent', () => {
  let component: FormEditarUserComponent;
  let fixture: ComponentFixture<FormEditarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
