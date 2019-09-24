import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMasterComponent } from './delivery-master.component';

describe('DeliveryMasterComponent', () => {
  let component: DeliveryMasterComponent;
  let fixture: ComponentFixture<DeliveryMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
