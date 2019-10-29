import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WearNowComponent } from './wear-now.component';

describe('WearNowComponent', () => {
  let component: WearNowComponent;
  let fixture: ComponentFixture<WearNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WearNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WearNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
