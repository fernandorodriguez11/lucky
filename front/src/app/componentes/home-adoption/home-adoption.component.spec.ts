import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdoptionComponent } from './home-adoption.component';

describe('HomeAdoptionComponent', () => {
  let component: HomeAdoptionComponent;
  let fixture: ComponentFixture<HomeAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
