import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-button-raised',
  templateUrl: './button-raised.component.html',
  styleUrls: ['./button-raised.component.scss']
})
export class ButtonRaisedComponent implements OnInit {
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
