import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-icon',
  templateUrl: './add-icon.component.html',
  styleUrls: ['./add-icon.component.scss']
})
export class AddIconComponent implements OnInit {

  @Input() lightMode = false;

  constructor() { }

  ngOnInit(): void {
  }

}
