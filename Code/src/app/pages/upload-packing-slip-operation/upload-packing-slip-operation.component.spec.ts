import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPackingSlipOperationComponent } from './upload-packing-slip-operation.component';

describe('UploadPackingSlipOperationComponent', () => {
  let component: UploadPackingSlipOperationComponent;
  let fixture: ComponentFixture<UploadPackingSlipOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPackingSlipOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPackingSlipOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
