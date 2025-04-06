import { AbstractControl } from '@angular/forms';

const validateText = (control: AbstractControl) => {
  const value = control.value;
  if (!value) return null;
  const trimmedValue = control.value.trim();
  if (/^[a-zA-Z0-9 ]+$/.test(trimmedValue)) {
    return null;
  }
  return { wrongLanguage: true };
};

export default validateText;
