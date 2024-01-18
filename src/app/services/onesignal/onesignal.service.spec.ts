import { TestBed } from '@angular/core/testing';

import { OnesignalService } from './onesignal.service';

describe('OnesignalService', () => {
  let service: OnesignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnesignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
