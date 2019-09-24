import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualGodownMasterComponent } from './virtual-godown-master.component';

describe('VirtualGodownMasterComponent', () => {
  let component: VirtualGodownMasterComponent;
  let fixture: ComponentFixture<VirtualGodownMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualGodownMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualGodownMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
