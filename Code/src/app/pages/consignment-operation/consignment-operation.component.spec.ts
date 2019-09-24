import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentOperationComponent } from './consignment-operation.component';

describe('ConsignmentOperationComponent', () => {
  let component: ConsignmentOperationComponent;
  let fixture: ComponentFixture<ConsignmentOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
