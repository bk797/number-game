import { TestBed, inject } from '@angular/core/testing';

import { GameMessagesService } from './game-messages.service';

describe('GameMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameMessagesService]
    });
  });

  it('should be created', inject([GameMessagesService], (service: GameMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
