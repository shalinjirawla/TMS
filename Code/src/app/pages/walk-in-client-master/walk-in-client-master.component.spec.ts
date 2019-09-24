import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInClientMasterComponent } from './walk-in-client-master.component';

describe('WalkInClientMasterComponent', () => {
  let component: WalkInClientMasterComponent;
  let fixture: ComponentFixture<WalkInClientMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkInClientMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkInClientMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
