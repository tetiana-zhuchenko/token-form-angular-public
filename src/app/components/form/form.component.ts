import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import validateText from '../../utils/validateText';
import { TTokenData } from '../../types/TTokenData';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  public initialCompanies = [
    { id: 1, title: 'My Company' },
    { id: 2, title: 'Google' },
    { id: 3, title: 'Microsoft' },
    { id: 4, title: 'Amazon' },
  ];
  formSubmitted = signal(false);
  blockchain = signal('Ethereum');
  tokenForm = new FormGroup({
    company: new FormControl('My Company'),
    tokenName: new FormControl('', {
      validators: [Validators.required, validateText],
    }),
    symbol: new FormControl('', {
      validators: [Validators.required, validateText],
    }),
    tokenSupply: new FormControl(null, {
      validators: [Validators.required],
    }),
    enabled: new FormControl(false, {
      validators: [Validators.required],
    }),
  });

  isControlInvalid(controlName: string): boolean {
    const control = this.tokenForm.get(controlName);
    return (
      !!control &&
      control.invalid &&
      (control.touched || control.dirty || this.formSubmitted())
    );
  }

  hasError(controlName: string, errorType: string): boolean {
    const control = this.tokenForm.get(controlName);
    return (
      !!control &&
      control.invalid &&
      (control.touched || control.dirty || !!control?.errors?.[errorType])
    );
  }

  ethereumClick() {
    this.blockchain.set('Ethereum');
  }

  bscClick() {
    this.blockchain.set('Binance Smart Chain');
  }

  setToLocalStorage(data: TTokenData) {
    if (typeof window !== 'undefined') {
      const existingData = localStorage.getItem('AngTokApp');
      let tokens = [];
      if (existingData) {
        tokens = JSON.parse(existingData);
      }
      tokens.push(data);
      localStorage.setItem('AngTokApp', JSON.stringify(tokens));
    }
  }

  onSubmit() {
    this.formSubmitted.set(true);

    if (this.tokenForm.valid) {
      const tokenData: TTokenData = {
        company: this.tokenForm.value.company!,
        tokenName: this.tokenForm.value.tokenName!,
        symbol: this.tokenForm.value.symbol!,
        tokenSupply: this.tokenForm.value.tokenSupply!,
        blockchain: this.blockchain()!,
        enabled: this.tokenForm.value.enabled!,
        id: Math.random(),
      };
      this.setToLocalStorage(tokenData);
      window.location.href = './tokens';
    }

    this.tokenForm.controls;
    console.log(this.tokenForm.value);
  }
}
