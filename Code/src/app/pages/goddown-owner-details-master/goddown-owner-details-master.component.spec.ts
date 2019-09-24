import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoddownOwnerDetailsMasterComponent } from './goddown-owner-details-master.component';

describe('GoddownOwnerDetailsMasterComponent', () => {
  let component: GoddownOwnerDetailsMasterComponent;
  let fixture: ComponentFixture<GoddownOwnerDetailsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoddownOwnerDetailsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoddownOwnerDetailsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
