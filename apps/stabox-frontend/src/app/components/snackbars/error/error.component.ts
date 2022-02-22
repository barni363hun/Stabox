import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() message = 'Error';

  constructor() { }

  ngOnInit(): void {
  }

}
