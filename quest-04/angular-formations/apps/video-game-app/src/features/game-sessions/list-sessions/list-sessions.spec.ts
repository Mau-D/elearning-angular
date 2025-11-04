import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSessions } from './list-sessions';

describe('ListSessions', () => {
  let component: ListSessions;
  let fixture: ComponentFixture<ListSessions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSessions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSessions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
