import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckUnloadingComponent } from './truck-unloading.component';

describe('TruckUnloadingComponent', () => {
  let component: TruckUnloadingComponent;
  let fixture: ComponentFixture<TruckUnloadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckUnloadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckUnloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
