import { TestBed } from '@angular/core/testing';

import { WebsiteRequestService } from './website-request.service';

describe('WebsiteRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebsiteRequestService = TestBed.get(WebsiteRequestService);
    expect(service).toBeTruthy();
  });
});
