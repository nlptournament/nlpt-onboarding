import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { Onboarding } from 'src/app/interfaces/onboarding';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnChanges {
  uri: String = window.location.pathname;
  login: boolean = false;
  onboarding?: Onboarding;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }


  onboardingChanged(newOnboarding: Onboarding | undefined) {
    this.onboarding = newOnboarding;
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }

}
