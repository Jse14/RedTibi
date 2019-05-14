import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopMensajePage } from './pop-mensaje.page';

describe('PopMensajePage', () => {
  let component: PopMensajePage;
  let fixture: ComponentFixture<PopMensajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopMensajePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopMensajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
