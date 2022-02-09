import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-get-started-button',
  templateUrl: './get-started-button.component.html',
  styleUrls: ['./get-started-button.component.scss'],
})
export class GetStartedButtonComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
