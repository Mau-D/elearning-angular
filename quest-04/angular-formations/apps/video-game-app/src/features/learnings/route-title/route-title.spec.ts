import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTitle } from './route-title';

describe('RouteTitle', () => {
  let component: RouteTitle;
  let fixture: ComponentFixture<RouteTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
