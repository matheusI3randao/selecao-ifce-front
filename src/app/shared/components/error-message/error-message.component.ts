import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidatorsUtils } from 'src/app/shared/utils/validators';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input()
  control: FormControl;

  @Input()
  label: string;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {
    for (const propertyName in this.control?.errors) {
      if (this.control?.errors.hasOwnProperty(propertyName) &&
        this.control?.touched) {
        return ValidatorsUtils.getErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
