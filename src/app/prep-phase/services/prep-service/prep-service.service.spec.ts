import { TestBed, inject } from '@angular/core/testing';

import { PrepServiceService } from './prep-service.service';

describe('PrepServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrepServiceService]
    });
  });

  it('should be created', inject([PrepServiceService], (service: PrepServiceService) => {
    expect(service).toBeTruthy();
  }));
});
