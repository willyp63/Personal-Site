import { AppLayoutModule } from './app-layout.module';

describe('AppLayoutModule', () => {
  let appLayoutModule: AppLayoutModule;

  beforeEach(() => {
    appLayoutModule = new AppLayoutModule();
  });

  it('should create an instance', () => {
    expect(appLayoutModule).toBeTruthy();
  });
});
