import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageNavbarComponent } from './mainpage-navbar.component';

describe('MainpageNavbarComponent', () => {
  let component: MainpageNavbarComponent;
  let fixture: ComponentFixture<MainpageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpageNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
