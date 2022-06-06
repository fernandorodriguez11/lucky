import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionComponent } from './adopcion.component';

describe('AdopcionComponent', () => {
  let component: AdopcionComponent;
  let fixture: ComponentFixture<AdopcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdopcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
