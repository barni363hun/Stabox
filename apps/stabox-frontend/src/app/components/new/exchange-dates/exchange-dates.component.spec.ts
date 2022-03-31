import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeDatesComponent } from './exchange-dates.component';

describe('ExchangeDatesComponent', () => {
  let component: ExchangeDatesComponent;
  let fixture: ComponentFixture<ExchangeDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
