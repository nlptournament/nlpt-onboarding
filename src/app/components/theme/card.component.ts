import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="mx-auto w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent {
}
