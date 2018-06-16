import { GameManagerModule } from './game-manager.module';

describe('GameManagerModule', () => {
  let gameManagerModule: GameManagerModule;

  beforeEach(() => {
    gameManagerModule = new GameManagerModule();
  });

  it('should create an instance', () => {
    expect(gameManagerModule).toBeTruthy();
  });
});
