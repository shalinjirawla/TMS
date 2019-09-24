import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesGenerationOperationComponent } from './series-generation-operation.component';

describe('SeriesGenerationMasterComponent', () => {
  let component: SeriesGenerationOperationComponent;
  let fixture: ComponentFixture<SeriesGenerationOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesGenerationOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesGenerationOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
