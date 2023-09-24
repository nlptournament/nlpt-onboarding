import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Onboarding } from 'src/app/interfaces/onboarding';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { UtilsService } from 'src/app/services/utils.service';
import { OnboardingService } from '../../services/onboarding.service';
import { OnlineService } from '../../services/online.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
})
export class OnboardingComponent implements OnInit {
  onboarding?: Onboarding;
  errorMsg: string[] = [];
  selectedTable: number | undefined;
  selectedSeat: number | undefined;
  selectedPw: string | undefined;

  constructor(
    private errorHandler: ErrorHandlerService,
    private onboardingService: OnboardingService,
    private onlineService: OnlineService,
    private utils: UtilsService,
  ) {}

  ngOnInit(): void {
    this.refreshOnboarding();
  }

  refreshOnboarding() {
    this.onboardingService
      .getOnboarding()
      .subscribe({
        next: (onboarding: Onboarding) => {
          this.onboarding = onboarding;
          if (onboarding?.tables) {
            this.selectedTable = onboarding.tables[0];
          }
        },
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          if (this.errorHandler.elementError) this.translateErrorCode(this.errorHandler.elementErrors);
        }
      })
  }

  sendSeatParameters() {
    if (this.selectedTable && this.selectedSeat && this.selectedPw) {
      this.errorMsg = [];
      this.selectedSeat = parseInt(this.selectedSeat.toString());
      this.onboardingService
        .startOnboarding(this.selectedTable, this.selectedSeat, this.selectedPw)
        .subscribe({
          next: (onboarding: Onboarding) => {
            this.onboarding = onboarding;
          },
          error: (err: HttpErrorResponse) => {
            this.errorHandler.handleError(err);
            if (this.errorHandler.elementError) this.translateErrorCode(this.errorHandler.elementErrors);
          }
        })
    }
  }

  sendParticipantConfirmation(selection: boolean) {
    this.errorMsg = [];
    this.onboardingService
      .completeOnboarding(selection)
      .subscribe({
        next: (onboarding: Onboarding) => {
          this.onboarding = onboarding;
          if (this.onboarding.done === true) {
            this.goToOnlinePageAfterNetworkIsOnline();
          }
        },
        error: (err: HttpErrorResponse) => {
          this.onboarding = undefined;
          this.errorHandler.handleError(err);
          if (this.errorHandler.elementError) this.translateErrorCode(this.errorHandler.elementErrors);
        }
      })
  }

  translateErrorCode(error: any) {
    let msg: string = "";

    if (error.code === 6) msg = $localize `:@@OnboardingErrorCode6:Your Device is unknown. Please contact an admin.`;
    if (error.code === 7) msg = $localize `:@@OnboardingErrorCode7:Your Device is blocked for onboarding. Please contact an admin.`;
    if (error.code === 8) msg = $localize `:@@OnboardingErrorCode8:Invalid Table number. Please try again.`;
    if (error.code === 9) msg = $localize `:@@OnboardingErrorCode9:Invalid Seat number. Please try again.`;
    if (error.code === 10) msg = $localize `:@@OnboardingErrorCode10:This Seat is allready taken. Please try again or contact an admin.`;
    if (error.code === 11) msg = $localize `:@@OnboardingErrorCode11:Wrong password. Please try again.`;
    if (error.code === 12) msg = $localize `:@@OnboardingErrorCode12:This Seat is not associated to a Participant. Please contact an admin.`;
    if (error.code === 13) msg = $localize `:@@OnboardingErrorCode13:Something went wrong. Please try again.`;
    if (error.code === 14) msg = $localize `:@@OnboardingErrorCode14:Please contact an admin.`;

    if (msg === "") msg = $localize `:@@OnboardingErrorCodeFallback:Unknown error. Please contact an admin.`;
    this.errorMsg = [
      msg
    ];
  }

  goToOnlinePageAfterNetworkIsOnline() {
    this.onlineService.loadOnlinePageUntilItSucceed()
      .subscribe(
        online => {
          if (online) {
            this.onlineService.redirectToOnlinePage();
          }
        }
      )
  }

  get assignedIp(): string {
    const ip = this.onboarding?.ip;

    if (ip) {
      return this.utils.ip_int_to_str(ip);
    } else {
      return '';
    }
  }

  get allSeatParametersGiven(): boolean {
    return this.selectedTable != undefined && this.selectedTable > 0
      && this.selectedPw != undefined && this.selectedPw.length > 0
      && this.selectedSeat != undefined && this.selectedSeat > 0;
  }
}
