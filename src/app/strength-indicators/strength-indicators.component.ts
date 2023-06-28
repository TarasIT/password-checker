import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength-indicators',
  templateUrl: './strength-indicators.component.html',
  styleUrls: ['./strength-indicators.component.css'],
})
export class StrengthIndicatorsComponent {
  @Input() passwordStrength: string = '';
}
