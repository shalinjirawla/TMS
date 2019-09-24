import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardMasterComponent } from './outward-master.component';

describe('OutwardMasterComponent', () => {
  let component: OutwardMasterComponent;
  let fixture: ComponentFixture<OutwardMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
