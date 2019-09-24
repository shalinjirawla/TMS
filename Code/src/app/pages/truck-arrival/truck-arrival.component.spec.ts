import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckArrivalComponent } from './truck-arrival.component';

describe('TruckArrivalComponent', () => {
  let component: TruckArrivalComponent;
  let fixture: ComponentFixture<TruckArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
