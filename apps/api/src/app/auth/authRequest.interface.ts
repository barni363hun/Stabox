export interface authRequest extends Request {
  user: {
    'https://www.stabox.hu/roles': string[];
    given_name: string;
    family_name: string;
    nickname: string;
    name: string;
    picture: string;
    locale: string;
    updated_at: string;
    iss: string;
    sub: string;
    aud: string;
    iat: number;
    exp: number;
    auth_time: number;
  };
}
/*
"https://www.stabox.hu/roles": [
    "admin",
    "Cat person"
  ],
  "given_name": "Princzes",
  "family_name": "Barnabás",
  "nickname": "barni.pbs",
  "name": "Princzes Barnabás",
  "picture": "https://lh3.googleusercontent.com/a-/AOh14GiL0zvdT_-Kx5_1Y14i_EOgid0e_Pfpd5ceiFwm=s96-c",
  "locale": "hu",
  "updated_at": "2022-01-28T12:23:33.644Z",
  "iss": "https://barni363hun.eu.auth0.com/",
  "sub": "google-oauth2|109681074907317705948",
  "aud": "70x759xfYo7pvQS39ptmBpnpBRv8MUkA",
  "iat": 1643372614,
  "exp": 1643408614,
  "auth_time": 1643372613
*/
