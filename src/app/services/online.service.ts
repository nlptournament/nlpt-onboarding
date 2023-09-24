import { HttpErrorResponse } from '@angular/common/http';
import {
  map,
  retry,
  timer,
  Observable
} from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {
  onlineImageUrl = environment.onlineImageUrl;
  onlineUrl = environment.onlineUrl;

  private loadImage(): Observable<boolean> {
    return new Observable((subscriber) => {
      const image = new Image();
      image.onload = () => {
        subscriber.next(true);
      }
      image.onerror = () => {
        subscriber.next(false);
      }
      image.src = this.onlineImageUrl;
      return () => {
        image.onload = null;
        image.onerror = null;
        image.src = '';
      }
    })
  }

  loadOnlinePageUntilItSucceed() {

    return this.loadImage().pipe(
      map(online => {
        if (!online) {
          throw new HttpErrorResponse({});
        }
        return true;
      }),
      retry({
        delay: () => {
          return timer(10000)
        }
      }),
    )
  }

  redirectToOnlinePage() {
    window.location.href = this.onlineUrl;
  }
}
