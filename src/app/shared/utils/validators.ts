import { FormControl, FormGroup } from '@angular/forms';
import { Util } from './utils';
export abstract class ValidatorsUtils {
  public static validarCampos(form: FormGroup) {
    for (const i in form.controls) {
      form.controls[i].markAsTouched();
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }
  }

  public static validarCPF(form: FormGroup) {
    const cpf = form.controls.cpf.value;
    if (cpf && !Util.isCPFValido(cpf)) {
      form.controls.cpf.setErrors({ pattern: true });
    }
  }

  public static noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  public static getErrorMessage(label: string, validatorName: string, validatorValue?: any) {
    const config = {
      required: `${label ? label : 'Este campo'} é obrigatório!`,
      minlength: `${label} precisa ter no mínimo ${validatorValue.requiredLength} caracteres!`,
      maxlength: `${label} precisa ter no máximo ${validatorValue.requiredLength} caracteres!`,
      pattern: `${label} inválido!`,
      email: 'Email inválido!',
      whitespace: 'Este campo não pode ser vazio!',
      duplicated: `${label} já está cadastrado(a)!`,
      confirm: 'As senhas não correspondem!',
    };

    return config[validatorName];
  }
}
