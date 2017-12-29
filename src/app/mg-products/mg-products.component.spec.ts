import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgProductsComponent } from './mg-products.component';

describe('MgProductsComponent', () => {
  let component: MgProductsComponent;
  let fixture: ComponentFixture<MgProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
