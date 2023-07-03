import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength-indicators',
  templateUrl: './strength-indicators.component.html',
  styleUrls: ['./strength-indicators.component.css'],
})
export class StrengthIndicatorsComponent {
  @Input() passwordStrength: string = '';
  passwords: string[] = ['short', 'easy', 'medium', 'strong'];

  changeBgColor(password: string) {
    let styles: any = {};

    switch (this.passwordStrength) {
      case this.passwords[0]:
        styles = {
          'background-color': 'red',
        };
        break;

      case this.passwords[1]:
        styles = {
          'background-color': 'red',
        };
        if (password !== this.passwords[1]) {
          styles = {};
        }
        break;

      case this.passwords[2]:
        styles = {
          'background-color': 'yellow',
        };
        if (password !== this.passwords[1] && password !== this.passwords[2]) {
          styles = {};
        }
        break;

      case this.passwords[3]:
        styles = {
          'background-color': 'green',
        };
        break;

      default:
        styles = {};
        break;
    }

    return styles;
  }
}
