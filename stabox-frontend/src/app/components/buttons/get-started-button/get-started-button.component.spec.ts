import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedButtonComponent } from './get-started-button.component';

describe('GetStartedButtonComponent', () => {
  let component: GetStartedButtonComponent;
  let fixture: ComponentFixture<GetStartedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStartedButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
