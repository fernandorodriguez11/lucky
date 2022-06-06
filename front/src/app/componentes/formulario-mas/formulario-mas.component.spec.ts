import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMasComponent } from './formulario-mas.component';

describe('FormularioMasComponent', () => {
  let component: FormularioMasComponent;
  let fixture: ComponentFixture<FormularioMasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioMasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
