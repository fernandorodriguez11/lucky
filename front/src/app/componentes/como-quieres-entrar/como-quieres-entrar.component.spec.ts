import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoQuieresEntrarComponent } from './como-quieres-entrar.component';

describe('ComoQuieresEntrarComponent', () => {
  let component: ComoQuieresEntrarComponent;
  let fixture: ComponentFixture<ComoQuieresEntrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoQuieresEntrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoQuieresEntrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
