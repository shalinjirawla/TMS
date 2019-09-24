import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingTypeMasterComponent } from './packing-type-master.component';

describe('PackingTypeMasterComponent', () => {
  let component: PackingTypeMasterComponent;
  let fixture: ComponentFixture<PackingTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
