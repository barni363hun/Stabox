import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { LogoComponent } from './components/logo/logo.component';
import { SignInButtonComponent } from './components/buttons/sign-in-button/sign-in-button.component';
import { SignUpButtonComponent } from './components/buttons/sign-up-button/sign-up-button.component';
import { GetStartedButtonComponent } from './components/buttons/get-started-button/get-started-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LogoComponent,
    SignInButtonComponent,
    SignUpButtonComponent,
    GetStartedButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
