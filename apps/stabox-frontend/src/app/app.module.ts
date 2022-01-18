import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule } from '@auth0/auth0-angular';
import { LogoComponent } from './components/logo/logo.component';
import { SignInButtonComponent } from './components/buttons/sign-in-button/sign-in-button.component';
import { GetStartedButtonComponent } from './components/buttons/get-started-button/get-started-button.component';
import { MainpageNavbarComponent } from './components/mainpage-navbar/mainpage-navbar.component';
import { LanguageIconComponent } from './components/language-icon/language-icon.component';
import { EmailInputComponent } from './components/form/email-input/email-input.component';
import { LandingCardComponent } from './components/pages/mainpage/landing-card/landing-card.component';
import { FirstCardComponent } from './components/pages/mainpage/first-card/first-card.component';
import { SecondCardComponent } from './components/pages/mainpage/second-card/second-card.component';
import { ThirdCardComponent } from './components/pages/mainpage/third-card/third-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NameInputComponent } from './components/form/name-input/name-input.component';
import { MessageInputComponent } from './components/form/message-input/message-input.component';
import { DividerComponent } from './components/divider/divider.component';
import { ContactUsButtonComponent } from './components/buttons/contact-us-button/contact-us-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LogoComponent,
    SignInButtonComponent,
    GetStartedButtonComponent,
    MainpageNavbarComponent,
    LanguageIconComponent,
    EmailInputComponent,
    LandingCardComponent,
    FirstCardComponent,
    SecondCardComponent,
    ThirdCardComponent,
    FooterComponent,
    NameInputComponent,
    MessageInputComponent,
    DividerComponent,
    ContactUsButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'barni363hun.eu.auth0.com',
      clientId: '70x759xfYo7pvQS39ptmBpnpBRv8MUkA',
    }),
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}