import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUnderlinedComponent } from './button-underlined.component';

describe('ButtonUnderlinedComponent', () => {
  let component: ButtonUnderlinedComponent;
  let fixture: ComponentFixture<ButtonUnderlinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonUnderlinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonUnderlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
