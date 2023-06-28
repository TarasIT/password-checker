import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { StrengthIndicatorsComponent } from './strength-indicators/strength-indicators.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    StrengthIndicatorsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
