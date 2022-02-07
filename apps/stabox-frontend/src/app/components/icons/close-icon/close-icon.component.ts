import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-close-icon',
  templateUrl: './close-icon.component.html',
  styleUrls: ['./close-icon.component.scss']
})
export class CloseIconComponent implements OnInit {

  @Input() lightMode = false;

  constructor() { }

  ngOnInit(): void {
  }

}
