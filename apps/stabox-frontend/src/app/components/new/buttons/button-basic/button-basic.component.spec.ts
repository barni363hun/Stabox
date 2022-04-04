import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBasicComponent } from './button-basic.component';

describe('ButtonBasicComponent', () => {
  let component: ButtonBasicComponent;
  let fixture: ComponentFixture<ButtonBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
