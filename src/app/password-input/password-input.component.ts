import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
})
export class PasswordInputComponent {
  @Input() passwordStrength: string = '';
  @Output() emitValue = new EventEmitter<string>();
  showPassword: boolean = false;
  placeholderText: string = 'Type a password...';

  handleInput(value: string) {
    this.emitValue.emit(value);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  clearPlaceholder() {
    this.placeholderText = '';
  }

  addPlaceholder() {
    if (!this.placeholderText) this.placeholderText = 'Type a password...';
  }
}
