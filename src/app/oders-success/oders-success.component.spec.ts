import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdersSuccessComponent } from './oders-success.component';

describe('OdersSuccessComponent', () => {
  let component: OdersSuccessComponent;
  let fixture: ComponentFixture<OdersSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdersSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdersSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
