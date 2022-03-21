import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-button-underlined',
  templateUrl: './button-underlined.component.html',
  styleUrls: ['./button-underlined.component.scss'],
})
export class ButtonUnderlinedComponent implements OnInit {
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
