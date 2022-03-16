import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable} from 'rxjs';
import { cError, cLog, cSuccess, userInterface } from '@stabox/stabox-lib';
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
      next: (myAuthUser) => {
        if (
          !this.userInitialized &&
          myAuthUser &&
          myAuthUser.email &&
          myAuthUser.picture &&
          myAuthUser.nickname &&
          myAuthUser.sub
        ) {
          this.authUser = myAuthUser;
          if (this.hasRole('user')) {
            this.isUser = true;
          }
          if (this.hasRole('shipper')) {
            this.isShipper = true;
          }
          cSuccess("authUser's been got");
          console.log(myAuthUser);
          const newUser: userInterface = {
            email: myAuthUser.email,
            firstName: myAuthUser.given_name,
            lastName: myAuthUser.family_name,
            picture: myAuthUser.picture,
            username: myAuthUser.nickname,
            id: myAuthUser.sub,
            ['https://www.stabox.hu/roles']:
              myAuthUser['https://www.stabox.hu/roles'],
            //TODO possible to add 'email_verified' if needed
          };
          if (myAuthUser.phone_number_verified) {
            newUser.phoneNumber = myAuthUser.phone_number;
          }
          this.getMyData().subscribe({
            next: (res) => {
              this.user = res;
              cSuccess("user's been got");
              console.log(this.user);
            },
            error: (err) => {
              cError(err.error.message);
              this.snackbarService.showErrorSnackbar(err.error.message);
              console.log(this.user);
              this.user = newUser;
              this.createUser(newUser);
            }
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
    cLog('updating user information');
    if (!this.snackbarService.validateEmail(this.user.email)) {
      this.snackbarService.showErrorSnackbar('Email field must contain an email')
    }
    else if (!this.snackbarService.validatePhoneNumber(this.user.phoneNumber)) {
      this.snackbarService.showErrorSnackbar('Phone number field must contain a phone number')
    }
    else {
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
              'User information saved.'
            );
            console.log(this.user);
            if (!this.isUser) {
              this.login();
              location.reload();
            }
          },
          error: (err) => {
            this.snackbarService.showErrorSnackbar(
              err.error.message
            );
            cError(err.error.message);
          }
        });
    }
  }

  private getMyData(): Observable<userInterface> {
    cLog('getting user info');
    return this.http.get<userInterface>(environment.apiURL + '/user');
  }

  public refreshUserData() {
    cLog('refreshing user information');
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
            'User created.'
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
            'Shipper role assigned.'
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
