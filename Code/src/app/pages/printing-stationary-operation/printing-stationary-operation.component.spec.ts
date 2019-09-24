import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingStationaryOperationComponent } from './printing-stationary-operation.component';

describe('PrintingStationaryOperationComponent', () => {
  let component: PrintingStationaryOperationComponent;
  let fixture: ComponentFixture<PrintingStationaryOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingStationaryOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingStationaryOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
