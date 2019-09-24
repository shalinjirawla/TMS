import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankMasterDetailsComponent } from './bank-master-details.component';

describe('BankMasterDetailsComponent', () => {
  let component: BankMasterDetailsComponent;
  let fixture: ComponentFixture<BankMasterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankMasterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankMasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
