import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stabox-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements OnInit {
  date = new Date();
  defaultValue: string = '';

  constructor() {}

  ngOnInit(): void {
    this.defaultValue = this.date
      .toLocaleString('hu-HU', {
        timeZone: 'Europe/Berlin',
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
      .slice(0, 19)
      .replace(/\. /g, '-')
      .replace(/\-/g, 'T')
      .replace('T', '-')
      .replace('T', '-');
  }
}
