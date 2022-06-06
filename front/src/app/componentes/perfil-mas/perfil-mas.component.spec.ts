import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMasComponent } from './perfil-mas.component';

describe('PerfilMasComponent', () => {
  let component: PerfilMasComponent;
  let fixture: ComponentFixture<PerfilMasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilMasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
