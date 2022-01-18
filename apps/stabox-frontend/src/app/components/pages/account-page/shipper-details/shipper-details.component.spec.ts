import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperDetailsComponent } from './shipper-details.component';

describe('ShipperDetailsComponent', () => {
  let component: ShipperDetailsComponent;
  let fixture: ComponentFixture<ShipperDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
