import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecieverWithAddressComponent } from './add-reciever-with-address.component';

describe('AddRecieverWithAddressComponent', () => {
  let component: AddRecieverWithAddressComponent;
  let fixture: ComponentFixture<AddRecieverWithAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecieverWithAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecieverWithAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
