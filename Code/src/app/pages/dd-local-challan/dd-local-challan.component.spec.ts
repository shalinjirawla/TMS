import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdLocalChallanComponent } from './dd-local-challan.component';

describe('DdLocalChallanComponent', () => {
  let component: DdLocalChallanComponent;
  let fixture: ComponentFixture<DdLocalChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdLocalChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdLocalChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
