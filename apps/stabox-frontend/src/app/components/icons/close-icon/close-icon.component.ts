import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services';

@Component({
  selector: 'app-close-icon',
  templateUrl: './close-icon.component.html',
  styleUrls: ['./close-icon.component.scss'],
})
export class CloseIconComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
