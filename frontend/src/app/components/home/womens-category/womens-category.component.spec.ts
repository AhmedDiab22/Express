import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensCategoryComponent } from './womens-category.component';

describe('WomensCategoryComponent', () => {
  let component: WomensCategoryComponent;
  let fixture: ComponentFixture<WomensCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
