import { DonePhaseModule } from './done-phase.module';

describe('DonePhaseModule', () => {
  let donePhaseModule: DonePhaseModule;

  beforeEach(() => {
    donePhaseModule = new DonePhaseModule();
  });

  it('should create an instance', () => {
    expect(donePhaseModule).toBeTruthy();
  });
});
