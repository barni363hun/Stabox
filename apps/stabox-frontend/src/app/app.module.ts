import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { LogoComponent } from './components/logo/logo.component';
import { SignInButtonComponent } from './components/buttons/sign-in-button/sign-in-button.component';
import { GetStartedButtonComponent } from './components/buttons/get-started-button/get-started-button.component';
import { MainpageNavbarComponent } from './components/navbars/mainpage-navbar/mainpage-navbar.component';
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
import { AccountPageNavbarComponent } from './components/navbars/account-page-navbar/account-page-navbar.component';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { AccountButtonComponent } from './components/buttons/account-button/account-button.component';
import { HomeIconComponent } from './components/icons/home-icon/home-icon.component';
import { ShipperDetailsComponent } from './components/pages/account-page/shipper-details/shipper-details.component';
import { CloseIconComponent } from './components/icons/close-icon/close-icon.component';
import { AddIconComponent } from './components/icons/add-icon/add-icon.component';
import { MyPackagesPageComponent } from './components/pages/my-packages-page/my-packages-page.component';
import { ShowMoreButtonComponent } from './components/buttons/show-more-button/show-more-button.component';
import { UserIconComponent } from './components/icons/user-icon/user-icon.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { PackageCardComponent } from './components/package/package-card/package-card.component';
import { AddPackageComponent } from './components/package/add-package/add-package.component';
import { FormsModule } from '@angular/forms';
import { AddRecieverWithAddressComponent } from './components/package/add-reciever-with-address/add-reciever-with-address.component';
import { ErrorComponent } from './components/snackbars/error/error.component';
import { SuccessComponent } from './components/snackbars/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LogoComponent,
    SignInButtonComponent,
    GetStartedButtonComponent,
    MainpageNavbarComponent,
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
    AccountPageNavbarComponent,
    AccountPageComponent,
    AccountButtonComponent,
    HomeIconComponent,
    ShipperDetailsComponent,
    CloseIconComponent,
    AddIconComponent,
    MyPackagesPageComponent,
    ShowMoreButtonComponent,
    UserIconComponent,
    PackageCardComponent,
    AddPackageComponent,
    AddRecieverWithAddressComponent,
    ErrorComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
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
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
})
export class AppModule {}
