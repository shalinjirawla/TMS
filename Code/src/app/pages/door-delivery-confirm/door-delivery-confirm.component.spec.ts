import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorDeliveryConfirmComponent } from './door-delivery-confirm.component';

describe('DoorDeliveryConfirmComponent', () => {
  let component: DoorDeliveryConfirmComponent;
  let fixture: ComponentFixture<DoorDeliveryConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorDeliveryConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorDeliveryConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
