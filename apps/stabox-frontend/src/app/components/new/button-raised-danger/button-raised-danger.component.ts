import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-button-raised-danger',
  templateUrl: './button-raised-danger.component.html',
  styleUrls: ['./button-raised-danger.component.scss'],
})
export class ButtonRaisedDangerComponent implements OnInit {
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
