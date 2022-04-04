import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-button-basic',
  templateUrl: './button-basic.component.html',
  styleUrls: ['./button-basic.component.scss']
})
export class ButtonBasicComponent implements OnInit {
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
