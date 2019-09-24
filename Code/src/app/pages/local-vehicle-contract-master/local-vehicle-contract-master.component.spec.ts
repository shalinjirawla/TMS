import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalVehicleContractMasterComponent } from './local-vehicle-contract-master.component';

describe('LocalVehicleContractMasterComponent', () => {
  let component: LocalVehicleContractMasterComponent;
  let fixture: ComponentFixture<LocalVehicleContractMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalVehicleContractMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalVehicleContractMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
