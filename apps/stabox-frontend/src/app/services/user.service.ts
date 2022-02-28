import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, observable, Observable, window, zip } from 'rxjs';
import { cError, cSuccess, userInterface } from '@stabox/stabox-lib';
import { SnackbarService } from '.';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: userInterface = {
    ['https://www.stabox.hu/roles']: [],
    id: '',
    email: '',
    username: '',
    picture: '',
  };
  public authUser: User = {};
  //TODO userInit triggers twice on login IDK why (rework with emit maybe)
  public authUserInit: Observable<User | undefined | null> =
    this.authService.user$;
  public userInitialized = false;
  isUser = false;
  isShipper = false;
  //user: EventEmitter<any> = new EventEmitter();

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {
    this.authUserInit.subscribe({
      next: (authU) => {
        if (
          !this.userInitialized &&
          authU &&
          authU.email &&
          authU.picture &&
          authU.nickname &&
          authU.sub
        ) {
          cSuccess("authUser's been got");
          this.authUser = authU;
          if (this.hasRole('user')) {
            this.isUser = true;
          }
          if (this.hasRole('shipper')) {
            this.isShipper = true;
          }
          console.log(authU);
          const newUser: userInterface = {
            email: authU.email,
            firstName: authU.given_name,
            lastName: authU.family_name,
            picture: authU.picture,
            username: authU.nickname,
            id: authU.sub,
            ['https://www.stabox.hu/roles']:
              authU['https://www.stabox.hu/roles'],
            //TODO possible to add 'email_verified' if needed
          };
          if (authU.phone_number_verified) {
            newUser.phoneNumber = authU.phone_number;
          }
          this.getMyData().subscribe({
            next: (res) => {
              cSuccess("user's been got");
              this.user = res;
            },
            error: (err) => {
              cError(err.error.message);
              this.snackbarService.showErrorSnackbar(err.error.message);
              this.user = newUser;
              this.createUser(newUser);
            },
            complete: () => {
              console.log(this.user);
            },
          });
          this.userInitialized = true;
        }
      },
      error: (err) => {
        cError(err.error.message);
        this.snackbarService.showErrorSnackbar(err.error.message);
      },
    });
  }

  public update() {
    console.log('updating user information');
    this.http
      .patch<userInterface>(environment.apiURL + '/user', {
        email: this.user.email,
        username: this.user.username,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        phoneNumber: this.user.phoneNumber,
      })
      .subscribe({
        next: (res) => {
          cSuccess('user info updated');
          this.snackbarService.showSuccessSnackbar(
            'User information updated successfully.'
          );
          console.log(this.user);
          if (!this.isUser) {
            this.login();
            location.reload();
          }
        },
        error: (err) => {
          this.snackbarService.showErrorSnackbar(
            this.formatMessage(err.error.message)
          );
          cError(err.error.message);
        },
      });
  }

  private formatMessage(message: string) {
    let messages: string[] = message.toString().split(',');
    let errorMessage: string = '';
    for (let index = 0; index < messages.length; index++) {
      let message = messages[index];
      const i = message.search(/[A-Z]/);
      if (i != -1) {
        message = message.replace(/[A-Z]/, ` ${message[i].toLowerCase()}`);
      }
      message = message.replace(message[0], message[0].toUpperCase());
      errorMessage += message + '. ';
    }
    return errorMessage;
  }

  private getMyData(): Observable<userInterface> {
    console.log('getting user info');
    return this.http.get<userInterface>(environment.apiURL + '/user');
  }

  public refreshUserData() {
    console.log('refreshing user information');
    this.http.get<userInterface>(environment.apiURL + '/user').subscribe({
      next: (res) => {
        cSuccess('user info refreshed');
        this.user = res;
        console.log(this.user);
      },
      error: (err) => {
        cError(err.error.message);
        this.snackbarService.showErrorSnackbar(err.error.message);
      },
    });
  }

  public deleteUser() {
    if (confirm('Are you sure you want to delete your accaunt?')) {
      //TODO delete accaunt
      this.logout();
    } else {
      alert('uh... that was close');
    }
  }

  private createUser(u: userInterface) {
    console.log('create user');
    this.http
      .put(environment.apiURL + '/user', {
        email: u.email,
        username: u.username,
      })
      .subscribe({
        next: (res) => {
          cSuccess('user created');
          this.snackbarService.showSuccessSnackbar(
            'User created successfully.'
          );
          console.log(res);
        },
        error: (err) => {
          cError(err.error.message);
          this.snackbarService.showErrorSnackbar(err.error.message);
        },
      });
  }

  public userLoggedIn(): boolean {
    if (this.user.id) {
      return true;
    } else {
      return false;
    }
  }

  public login() {
    this.authService.loginWithRedirect();
  }

  public logout() {
    this.authService.logout();
  }

  private hasRole(str: string): boolean {
    if (this.authUser['https://www.stabox.hu/roles'].includes(str)) {
      return true;
    } else {
      return false;
    }
  }

  public beShipper() {
    console.log('assigning shipper role');
    this.http
      .post(environment.apiURL + '/user/shipper', {
        id: this.user.id,
      })
      .subscribe({
        next: (res) => {
          cSuccess('shipper role assigned');
          this.snackbarService.showSuccessSnackbar(
            'Shipper role assigned successfully.'
          );
          console.log(res);
          this.login();
        },
        error: (err) => {
          cError(err.error.message);
          this.snackbarService.showErrorSnackbar(err.error.message);
        },
      });
  }
}
