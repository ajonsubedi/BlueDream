import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News4Page } from './news4.page';

describe('News4Page', () => {
  let component: News4Page;
  let fixture: ComponentFixture<News4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
