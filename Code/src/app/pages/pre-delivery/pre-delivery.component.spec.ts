import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDeliveryComponent } from './pre-delivery.component';

describe('PreDeliveryComponent', () => {
  let component: PreDeliveryComponent;
  let fixture: ComponentFixture<PreDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
