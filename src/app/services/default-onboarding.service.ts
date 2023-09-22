import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Onboarding } from '../interfaces/onboarding';
import { OnboardingService } from './onboarding.service';

@Injectable()
export class DefaultOnboardingService  extends OnboardingService {

  private onboardingUrl = environment.apiUrl + '/onboarding/';

  constructor(private http: HttpClient) {
    super();
  }

  getOnboarding(): Observable<Onboarding> {
    return this.http.get<Onboarding>(this.onboardingUrl);
  }

  startOnboarding(table: number, seat: number, pw: string): Observable<Onboarding> {
    let payload = {
      'table': table,
      'seat': seat,
      'pw': pw
    }
    return this.http.post<Onboarding>(this.onboardingUrl, payload);
  }

  completeOnboarding(choice: boolean): Observable<Onboarding> {
    return this.http.put<Onboarding>(this.onboardingUrl, {'choice': choice});
  }
}
