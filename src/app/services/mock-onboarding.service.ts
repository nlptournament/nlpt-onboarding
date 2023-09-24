import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable, of, OperatorFunction, throwError } from 'rxjs';
import { Onboarding } from '../interfaces/onboarding';
import { OnboardingService } from './onboarding.service';

@Injectable()
export class MockOnboardingService extends OnboardingService {

  constructor(private http: HttpClient) {
    super();
  }

  getOnboarding(): Observable<Onboarding> {
    return of({
      tables: [1]
    });
  }

  startOnboarding(table: number, seat: number, pw: string): Observable<Onboarding> {
    console.log('startOnboarding', table, seat, pw);
    return of({
      tables: [1],
      ip: 3,
      participant: 'CrazyBa2na',
    });
  }

  completeOnboarding(choice: boolean): Observable<Onboarding> {
    console.log('choice', choice);
    return of({
      tables: [1],
      ip: 3,
      done: true,
    });
  }

  mockError(code: number) {
    return throwError(() => {new HttpErrorResponse(
      {
        error: {'error': {'code': code, 'desc': 'wrong password'}},
        status: 400,
      },
    )});
  }
}
