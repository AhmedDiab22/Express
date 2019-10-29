import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideProductDetailsComponent } from './side-product-details.component';

describe('SideProductDetailsComponent', () => {
  let component: SideProductDetailsComponent;
  let fixture: ComponentFixture<SideProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
