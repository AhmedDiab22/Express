import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensaleComponent } from './mensale.component';

describe('MensaleComponent', () => {
  let component: MensaleComponent;
  let fixture: ComponentFixture<MensaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
