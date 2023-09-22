import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline-section',
  template: `
    <div class="flex flex-row mb-3 items-center">
      <div class="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-500">
        <ng-content></ng-content>
      </div>
      <div class="flex-1 ml-3">
        <hr class="transition-all bg-red-500 border-none h-1 ease-out duration-1000" [class.w-0]="!started" [class.w-full]="started">
      </div>
    </div>
  `
})
export class HeadlineSectionComponent implements OnInit {

  public started = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.started = true;
    }, 400);
  }
}
