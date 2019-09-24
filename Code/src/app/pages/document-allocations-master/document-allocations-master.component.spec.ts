import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentAllocationsMasterComponent } from './document-allocations-master.component';

describe('DocumentAllocationsMasterComponent', () => {
  let component: DocumentAllocationsMasterComponent;
  let fixture: ComponentFixture<DocumentAllocationsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentAllocationsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentAllocationsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
