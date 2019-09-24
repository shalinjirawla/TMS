import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLocationMasterComponent } from './service-location-master.component';

describe('ServiceLocationMasterComponent', () => {
  let component: ServiceLocationMasterComponent;
  let fixture: ComponentFixture<ServiceLocationMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLocationMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLocationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
