import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityTypeMasterComponent } from './commodity-type-master.component';

describe('CommodityMasterComponent', () => {
  let component: CommodityTypeMasterComponent;
  let fixture: ComponentFixture<CommodityTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
