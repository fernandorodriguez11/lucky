import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoAdopcionComponent } from './estado-adopcion.component';

describe('EstadoAdopcionComponent', () => {
  let component: EstadoAdopcionComponent;
  let fixture: ComponentFixture<EstadoAdopcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoAdopcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
