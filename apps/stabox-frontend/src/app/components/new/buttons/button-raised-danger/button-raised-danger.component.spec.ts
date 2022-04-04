import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRaisedDangerComponent } from './button-raised-danger.component';

describe('ButtonRaisedDangerComponent', () => {
  let component: ButtonRaisedDangerComponent;
  let fixture: ComponentFixture<ButtonRaisedDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRaisedDangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRaisedDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
