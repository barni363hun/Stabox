import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInputNewComponent } from './address-input-new.component';

describe('AddressInputNewComponent', () => {
  let component: AddressInputNewComponent;
  let fixture: ComponentFixture<AddressInputNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressInputNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressInputNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
