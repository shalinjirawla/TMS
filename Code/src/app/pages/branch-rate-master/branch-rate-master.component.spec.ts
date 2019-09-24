import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchRateMasterComponent } from './branch-rate-master.component';

describe('BranchRateMasterComponent', () => {
  let component: BranchRateMasterComponent;
  let fixture: ComponentFixture<BranchRateMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchRateMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchRateMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
