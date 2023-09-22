import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
