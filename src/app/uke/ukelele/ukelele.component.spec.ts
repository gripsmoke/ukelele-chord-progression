/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UkeleleComponent } from './ukelele.component';

describe('UkeleleComponent', () => {
  let component: UkeleleComponent;
  let fixture: ComponentFixture<UkeleleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkeleleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkeleleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
