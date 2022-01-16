import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sign-up-button',
  templateUrl: './sign-up-button.component.html',
  styleUrls: ['./sign-up-button.component.scss'],
})
export class SignUpButtonComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}

  ngOnInit(): void {}
}
