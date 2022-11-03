/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SobremimComponent } from './sobremim.component';

describe('SobremimComponent', () => {
  let component: SobremimComponent;
  let fixture: ComponentFixture<SobremimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobremimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobremimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
