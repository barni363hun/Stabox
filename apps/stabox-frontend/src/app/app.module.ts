import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {
  AccountButtonComponent,
  ContactUsButtonComponent,
  GetStartedButtonComponent,
  ShowMoreButtonComponent,
  SignInButtonComponent,
  DividerComponent,
  FooterComponent,
  EmailInputComponent,
  MessageInputComponent,
  NameInputComponent,
  AddressInputComponent,
  AddIconComponent,
  CloseIconComponent,
  HomeIconComponent,
  UserIconComponent,
  LogoComponent,
  NavbarComponent,
  AddPackageComponent,
  AddRecieverWithAddressComponent,
  PackageCardComponent,
  AccountPageComponent,
  ShipperDetailsComponent,
  MainpageComponent,
  LandingCardComponent,
  FirstCardComponent,
  SecondCardComponent,
  ThirdCardComponent,
  SnackbarComponent,
  PackagesPageComponent,
  HomePageComponent,
  NavComponent,
  ButtonRaisedComponent,
  ButtonRaisedDangerComponent,
  ButtonBasicComponent,
  LandingComponent,
  StatisticsComponent,
  BenefitsComponent,
  InstructionsComponent,
  PageFooterComponent,
  ProfilePageComponent,
  SideNavComponent,
  BottomNavComponent,
  AccountComponent,
  ExchangeDatesComponent,
  DateInputComponent,
  AddressesComponent
} from './components';
import { AddressInputNewComponent } from './components/new/address-input-new/address-input-new.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LogoComponent,
    SignInButtonComponent,
    GetStartedButtonComponent,
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
    AccountPageComponent,
    AccountButtonComponent,
    HomeIconComponent,
    ShipperDetailsComponent,
    CloseIconComponent,
    AddIconComponent,
    ShowMoreButtonComponent,
    UserIconComponent,
    PackageCardComponent,
    AddPackageComponent,
    AddRecieverWithAddressComponent,
    SnackbarComponent,
    NavbarComponent,
    AddressInputComponent,
    PackagesPageComponent,
    HomePageComponent,
    NavComponent,
    ButtonRaisedComponent,
    ButtonRaisedDangerComponent,
    ButtonBasicComponent,
    LandingComponent,
    StatisticsComponent,
    BenefitsComponent,
    InstructionsComponent,
    PageFooterComponent,
    ProfilePageComponent,
    SideNavComponent,
    BottomNavComponent,
    AccountComponent,
    ExchangeDatesComponent,
    DateInputComponent,
    AddressesComponent,
    AddressInputNewComponent,
  ],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...environment.auth,
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apiURL}/*`,
            tokenOptions: {
              audience: environment.auth.audience,
            },
          },
        ],
      },
    }),
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
})
export class AppModule {}
