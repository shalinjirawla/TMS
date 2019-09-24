import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightMasterComponent } from './freight-master.component';

describe('FreightMasterComponent', () => {
  let component: FreightMasterComponent;
  let fixture: ComponentFixture<FreightMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
