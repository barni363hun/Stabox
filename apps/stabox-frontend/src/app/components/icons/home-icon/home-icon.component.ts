import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-icon',
  templateUrl: './home-icon.component.html',
  styleUrls: ['./home-icon.component.scss']
})
export class HomeIconComponent implements OnInit {

  @Input() lightMode = false;

  constructor() { }

  ngOnInit(): void {
  }

}
