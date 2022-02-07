import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPackagesPageComponent } from './my-packages-page.component';

describe('MyPackagesPageComponent', () => {
  let component: MyPackagesPageComponent;
  let fixture: ComponentFixture<MyPackagesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPackagesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPackagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
