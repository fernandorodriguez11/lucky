import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAnimalComponent } from './perfil-animal.component';

describe('PerfilAnimalComponent', () => {
  let component: PerfilAnimalComponent;
  let fixture: ComponentFixture<PerfilAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
