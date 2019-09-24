import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateReportReasonMasterComponent } from './late-report-reason-master.component';

describe('LateReportReasonMasterComponent', () => {
  let component: LateReportReasonMasterComponent;
  let fixture: ComponentFixture<LateReportReasonMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateReportReasonMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateReportReasonMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
