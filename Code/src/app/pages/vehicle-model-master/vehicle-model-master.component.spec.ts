import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeMasterComponent } from './vehicle-model-master.component';

describe('VehicleTypeMasterComponent', () => {
  let component: VehicleTypeMasterComponent;
  let fixture: ComponentFixture<VehicleTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
