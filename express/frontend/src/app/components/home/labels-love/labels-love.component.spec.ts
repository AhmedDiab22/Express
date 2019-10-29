import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsLoveComponent } from './labels-love.component';

describe('LabelsLoveComponent', () => {
  let component: LabelsLoveComponent;
  let fixture: ComponentFixture<LabelsLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelsLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
