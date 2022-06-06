import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionFiltroComponent } from './adopcion-filtro.component';

describe('AdopcionFiltroComponent', () => {
  let component: AdopcionFiltroComponent;
  let fixture: ComponentFixture<AdopcionFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdopcionFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopcionFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
