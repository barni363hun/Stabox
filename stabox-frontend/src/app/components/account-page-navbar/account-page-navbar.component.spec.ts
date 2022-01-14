import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPageNavbarComponent } from './account-page-navbar.component';

describe('AccountPageNavbarComponent', () => {
  let component: AccountPageNavbarComponent;
  let fixture: ComponentFixture<AccountPageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPageNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
