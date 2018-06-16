import { PrepPhaseModule } from './prep-phase.module';

describe('PrepPhaseModule', () => {
  let prepPhaseModule: PrepPhaseModule;

  beforeEach(() => {
    prepPhaseModule = new PrepPhaseModule();
  });

  it('should create an instance', () => {
    expect(prepPhaseModule).toBeTruthy();
  });
});
