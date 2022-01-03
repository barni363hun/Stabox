import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageIconComponent } from './language-icon.component';

describe('LanguageIconComponent', () => {
  let component: LanguageIconComponent;
  let fixture: ComponentFixture<LanguageIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
