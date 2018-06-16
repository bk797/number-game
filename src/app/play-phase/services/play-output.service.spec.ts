import { TestBed, inject } from '@angular/core/testing';

import { PlayOutputService } from './play-output.service';

describe('PlayOutputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayOutputService]
    });
  });

  it('should be created', inject([PlayOutputService], (service: PlayOutputService) => {
    expect(service).toBeTruthy();
  }));
});
