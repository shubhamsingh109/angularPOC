import { Component, OnInit, Input, ViewChild, ElementRef, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, ValidationErrors, AbstractControl, ValidatorFn, Validators, NG_VALIDATORS, NgControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   multi: true,
    //   useExisting: CustomInputComponent
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   multi: true,
    //   useExisting: CustomInputComponent
    // }
  ]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor, Validator {

  @ViewChild('input') input: ElementRef;
  disabled;

  @Input() type = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;
  constructor(@Self() public controlDir: NgControl) { 
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }


  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange(event) {

  }
  onTouched() {

  }

  validate(control: AbstractControl): ValidationErrors {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }
    return validators;
  }


}
