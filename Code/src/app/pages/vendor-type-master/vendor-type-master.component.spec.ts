import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTypeMasterComponent } from './vendor-type-master.component';

describe('VendorTypeMasterComponent', () => {
  let component: VendorTypeMasterComponent;
  let fixture: ComponentFixture<VendorTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
