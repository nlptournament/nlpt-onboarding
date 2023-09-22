import { Observable } from 'rxjs';
import { Onboarding } from '../interfaces/onboarding';

export abstract class OnboardingService {
  abstract getOnboarding(): Observable<Onboarding>;
  abstract startOnboarding(table: number, seat: number, pw: string): Observable<Onboarding>;
  abstract completeOnboarding(choice: boolean): Observable<Onboarding>;
}
