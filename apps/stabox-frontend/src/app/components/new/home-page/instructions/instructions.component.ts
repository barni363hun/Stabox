import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'apps/stabox-frontend/src/app/services';

@Component({
  selector: 'stabox-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
