import { TestBed } from '@angular/core/testing';

import { GetListSessions } from './get-list-sessions';

describe('GetListSessions', () => {
  let service: GetListSessions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListSessions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
