import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioPage } from './anuncio.page';

describe('AnuncioPage', () => {
  let component: AnuncioPage;
  let fixture: ComponentFixture<AnuncioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
