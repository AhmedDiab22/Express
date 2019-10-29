import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressLifeComponent } from './express-life.component';

describe('ExpressLifeComponent', () => {
  let component: ExpressLifeComponent;
  let fixture: ComponentFixture<ExpressLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
