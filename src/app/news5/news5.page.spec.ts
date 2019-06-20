import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News5Page } from './news5.page';

describe('News5Page', () => {
  let component: News5Page;
  let fixture: ComponentFixture<News5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
