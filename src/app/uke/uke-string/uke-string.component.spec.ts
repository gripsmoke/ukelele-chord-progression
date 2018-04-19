/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UkeStringComponent } from './uke-string.component';

describe('UkeStringComponent', () => {
  let component: UkeStringComponent;
  let fixture: ComponentFixture<UkeStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkeStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkeStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
