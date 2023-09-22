import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [attr.disabled]="buttonDisabled ? true : null"
      class="inline-flex items-center px-4 py-2 bg-gray-800 border border-white rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Input()
  buttonDisabled = false;
}
