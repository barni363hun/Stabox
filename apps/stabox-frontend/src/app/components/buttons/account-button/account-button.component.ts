import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-button',
  templateUrl: './account-button.component.html',
  styleUrls: ['./account-button.component.scss']
})
export class AccountButtonComponent implements OnInit {

  @Input() lightMode = false;

  constructor() { }

  ngOnInit(): void {
  }

}
