import { TestBed } from '@angular/core/testing';

import { GetListFriends } from './get-list-friends';

describe('GetListFriends', () => {
  let service: GetListFriends;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListFriends);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
