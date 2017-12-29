import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgOrdersComponent } from './mg-orders.component';

describe('MgOrdersComponent', () => {
  let component: MgOrdersComponent;
  let fixture: ComponentFixture<MgOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
