import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryJeansComponent } from './category-jeans.component';

describe('CategoryJeansComponent', () => {
  let component: CategoryJeansComponent;
  let fixture: ComponentFixture<CategoryJeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryJeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryJeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
