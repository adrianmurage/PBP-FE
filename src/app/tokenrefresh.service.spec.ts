import {TestBed} from '@angular/core/testing';

import {TokenrefreshService} from './tokenrefresh.service';

describe('TokenrefreshService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenrefreshService = TestBed.get(TokenrefreshService);
    expect(service).toBeTruthy();
  });
});
