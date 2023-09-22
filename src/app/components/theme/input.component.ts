import { Component, forwardRef, Input, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};
const noop = () => {
};
@Component({
  selector: 'app-input',
  template: `
    <input class="w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
           [id]="inputId"
           [(ngModel)]="model"
           #models="ngModel"
           [type]="inputType"
           [placeholder]="placeholder"
           [attr.disabled]="disabled"
           [attr.required]="required"
           [min]="min"
           (blur)="onBlur()"
    >
  `,
  providers: [INPUT_VALUE_ACCESSOR],
})
export class InputComponent implements ControlValueAccessor {
  @Input()
  inputId = "";
  @Input()
  inputType = "text";
  @Input()
  placeholder = "";
  innerModel = "";
  disabled = false;
  @Input()
  required = false;
  @Input()
  min: null|number = null;
  private onChange: (_: any) => void = noop;
  private onTouch: () => void = noop;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    if (undefined !== obj) {
      this.model = obj;
    }
  }

  get model() {
    return this.innerModel;
  }

  set model(value: string) {
    if (this.innerModel !== value) {
      this.innerModel = value;
      this.onChange(this.innerModel);
    }
  }

  onBlur() {
    this.onTouch();
  }
}
