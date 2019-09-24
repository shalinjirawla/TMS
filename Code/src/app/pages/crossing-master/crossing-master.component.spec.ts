import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossingMasterComponent } from './crossing-master.component';

describe('CrossingMasterComponent', () => {
  let component: CrossingMasterComponent;
  let fixture: ComponentFixture<CrossingMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossingMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossingMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
