import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingVouchersComponent } from './accounting-vouchers.component';

describe('AccountingVouchersComponent', () => {
  let component: AccountingVouchersComponent;
  let fixture: ComponentFixture<AccountingVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
