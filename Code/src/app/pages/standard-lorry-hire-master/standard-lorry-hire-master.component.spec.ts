import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardLorryHireMasterComponent } from './standard-lorry-hire-master.component';

describe('StandardLorryHireMasterComponent', () => {
  let component: StandardLorryHireMasterComponent;
  let fixture: ComponentFixture<StandardLorryHireMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardLorryHireMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardLorryHireMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
