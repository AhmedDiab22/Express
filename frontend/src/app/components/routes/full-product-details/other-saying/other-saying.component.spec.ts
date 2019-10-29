import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSayingComponent } from './other-saying.component';

describe('OtherSayingComponent', () => {
  let component: OtherSayingComponent;
  let fixture: ComponentFixture<OtherSayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
