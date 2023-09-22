import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { DockModule } from 'primeng/dock';
import { CheckboxModule } from 'primeng/checkbox';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    OnboardingComponent,
  ],
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    // AppRoutingModule,
    // HttpClientModule,
    // FormsModule,
    // ButtonModule,
    // InputTextModule,
    // PasswordModule,
    // CardModule,
    // OverlayPanelModule,
    // InputNumberModule,
    // DropdownModule,
    // TableModule,
    // DialogModule,
    // ConfirmDialogModule,
    // PanelModule,
    // ToastModule,
    // MessagesModule,
    // DockModule,
    // CheckboxModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
