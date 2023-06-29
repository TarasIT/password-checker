import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Password checker'.toUpperCase();
  passwordStrength: string = '';
  placeholderText: string = 'Type a password...';
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  handleInput(value: string) {
    this.password = value;
    this.validatePassword();
  }

  validatePassword() {
    const hasNumbers = /[0-9]/.test(this.password);
    const hasLetters = /\p{L}/u.test(this.password);
    const hasSymbols = /[^\p{L}\p{N}]/u.test(this.password);
    const hasLettersAndNumbers = hasNumbers && hasLetters && !hasSymbols;
    const hasNumbersAndSymbols = hasNumbers && !hasLetters && hasSymbols;
    const hasLettersAndSymbols = !hasNumbers && hasLetters && hasSymbols;

    const shortPassword = this.password.length >= 1 && this.password.length < 8;

    switch (true) {
      case shortPassword:
        this.passwordStrength = 'short';
        break;
      case (hasNumbers && !hasLetters && !hasSymbols) ||
        (!hasNumbers && hasLetters && !hasSymbols) ||
        (!hasNumbers && !hasLetters && hasSymbols):
        this.passwordStrength = 'easy';
        break;
      case hasLettersAndNumbers || hasNumbersAndSymbols || hasLettersAndSymbols:
        this.passwordStrength = 'medium';
        break;
      case hasNumbers && hasLetters && hasSymbols:
        this.passwordStrength = 'strong';
        break;
      default:
        this.passwordStrength = '';
        break;
    }
  }
}
