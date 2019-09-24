import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodownDeliveryComponent } from './godown-delivery.component';

describe('GodownDeliveryComponent', () => {
  let component: GodownDeliveryComponent;
  let fixture: ComponentFixture<GodownDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodownDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodownDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
