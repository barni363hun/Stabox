import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, observable, Observable } from 'rxjs';
import { cError, cSuccess, userInterface } from '@stabox/stabox-lib';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: userInterface = {
    roles: [],
    id: '',
    email: '',
    username: '',
    picture: '',
  };
  //TODO userInit triggers twice on login IDK why (rework with emit)
  public userInit: Observable<User | undefined | null> = this.authService.user$;
  public userInitialized = false;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.userInit.subscribe((authUser) => {
      if (!this.userInitialized) {
        console.log('authUser');
        console.log(authUser);
        this.userInitialized = true;
        if (
          authUser &&
          authUser.email &&
          authUser.picture &&
          authUser.nickname &&
          authUser.sub
        ) {
          const newUser: userInterface = {
            email: authUser.email,
            firstName: authUser.given_name,
            lastName: authUser.family_name,
            picture: authUser.picture,
            username: authUser.nickname,
            id: authUser.sub,
            roles: authUser['https://www.stabox.hu/roles'],
            //TODO possible to add 'email_verified' if needed
          };
          if (authUser.phone_number_verified) {
            newUser.phoneNumber = authUser.phone_number;
          }
          this.getMyData().subscribe({
            next: (res) => {
              cSuccess("user's been got");
              this.user = res;
            },
            error: (err) => {
              cError(err.error.message);
              this.user = newUser;
              this.createUser(newUser);
            },
            complete: () => {
              console.log(this.user);
            },
          });
        } else {
          console.error(
            'User cannot be initialized from ' + authUser + 'auth0 response'
          );
        }
      }
    });
  }

  public update() {
    console.log('updating user data');
    // TODO rework!
    if (this.user.roles) {
      return this.http
        .patch<any>(environment.apiURL + '/user', this.user)
        .subscribe((a) => console.log(a.message));
    } else {
      throw new Error('user is not initialized');
    }
  }

  private getMyData(): Observable<userInterface> {
    console.log('getting user info');
    return this.http.get<userInterface>(environment.apiURL + '/user');
  }

  public refreshUserData() {
    console.log('refreshing user information');
    this.http.get<userInterface>(environment.apiURL + '/user').subscribe({
      next: (res) => {
        cSuccess('refreshed');
        this.user = res;
        console.log(this.user);
      },
      error: (err) => {
        cError(err.error.message);
      },
    });
    // TODO user refresh emit
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
          console.log(res);
        },
        error: (err) => {
          cError(err.error.message);
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
}
