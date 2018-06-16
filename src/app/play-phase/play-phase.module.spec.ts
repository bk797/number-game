import { PlayPhaseModule } from './play-phase.module';

describe('PlayPhaseModule', () => {
  let playPhaseModule: PlayPhaseModule;

  beforeEach(() => {
    playPhaseModule = new PlayPhaseModule();
  });

  it('should create an instance', () => {
    expect(playPhaseModule).toBeTruthy();
  });
});
