import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth/auth-button/auth-button.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, AuthButtonComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'barni363hun.eu.auth0.com',
      clientId: '70x759xfYo7pvQS39ptmBpnpBRv8MUkA',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
