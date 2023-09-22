import { NgModule } from '@angular/core';
import { OnboardingService } from './services/onboarding.service';
import { DefaultOnboardingService } from './services/default-onboarding.service';

// @ts-ignore
@NgModule({
  providers: [
    { provide: OnboardingService, useClass: DefaultOnboardingService }
  ]
})
export class RealModule {

}
