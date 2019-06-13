import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoPage } from './calculo.page';

describe('CalculoPage', () => {
  let component: CalculoPage;
  let fixture: ComponentFixture<CalculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
