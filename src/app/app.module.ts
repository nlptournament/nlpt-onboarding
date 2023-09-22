import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { LogoComponent } from './components/logo/logo.component';
import { CardComponent } from './components/theme/card.component';
import { HeadlineSectionComponent } from './components/theme/headline.section.component';
import { InputComponent } from './components/theme/input.component';
import { ButtonComponent } from './components/theme/button.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    OnboardingComponent,
    LogoComponent,
    CardComponent,
    HeadlineSectionComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    environment.services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
