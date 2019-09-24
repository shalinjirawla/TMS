import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveOperationComponent } from './reserve-operation.component';

describe('ReserveOperationComponent', () => {
  let component: ReserveOperationComponent;
  let fixture: ComponentFixture<ReserveOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
