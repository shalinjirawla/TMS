import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSeriesAllocationOperationComponent } from './document-series-allocation-operation.component';

describe('DocumentSeriesAllocationOperationComponent', () => {
  let component: DocumentSeriesAllocationOperationComponent;
  let fixture: ComponentFixture<DocumentSeriesAllocationOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSeriesAllocationOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSeriesAllocationOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
