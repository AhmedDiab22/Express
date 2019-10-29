import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenSaleComponent } from './women-sale.component';

describe('WomenSaleComponent', () => {
  let component: WomenSaleComponent;
  let fixture: ComponentFixture<WomenSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
