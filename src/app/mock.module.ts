import { NgModule } from '@angular/core';
import { OnboardingService } from './services/onboarding.service';
import { MockOnboardingService } from './services/mock-onboarding.service';

@NgModule({
  providers: [
    { provide: OnboardingService, useClass: MockOnboardingService }
  ]
})
export class MockModule {

}
