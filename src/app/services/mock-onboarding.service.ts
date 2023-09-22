import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable, of, OperatorFunction } from 'rxjs';
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
    return of({})
      .pipe(
        this.mockError(2)
      );
  }

  completeOnboarding(choice: boolean): Observable<Onboarding> {
    return of({})
      .pipe(
        this.mockError(2)
      );
  }

  mockError<T, R>(code: number): OperatorFunction<T, R> {
    throw new HttpErrorResponse(
      {
        error: { error: { code: 2 } },
        status: 400,
      },
    );
  }
}
