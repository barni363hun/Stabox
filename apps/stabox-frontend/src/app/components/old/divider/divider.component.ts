import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
