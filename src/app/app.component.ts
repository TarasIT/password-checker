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
    const hasNumbers = /^\d*$/.test(this.password);
    const hasLetters = /^[a-zA-Z]*$/.test(this.password);
    const hasSymbols = /^[^a-zA-Z0-9]*$/.test(this.password);
    const hasLettersAndNumbers = /^[a-zA-Z0-9]*$/.test(this.password);
    const hasNumbersAndSymbols = /^[^a-zA-Z]*$/.test(this.password);
    const hasLettersAndSymbols = /^[^\d]*$/.test(this.password);
    const hasAllCharacters = /^[\p{L}\p{N}\W_]+$/u.test(this.password);

    const shortPassword = this.password.length >= 1 && this.password.length < 8;

    switch (true) {
      case shortPassword:
        this.passwordStrength = 'short';
        break;
      case this.password && (hasNumbers || hasLetters || hasSymbols):
        this.passwordStrength = 'easy';
        break;
      case this.password &&
        (hasLettersAndNumbers || hasNumbersAndSymbols || hasLettersAndSymbols):
        this.passwordStrength = 'medium';
        break;
      case this.password && hasAllCharacters:
        this.passwordStrength = 'strong';
        break;
      default:
        this.passwordStrength = '';
        break;
    }
  }
}
