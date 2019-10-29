import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideUserComponent } from './slide-user.component';

describe('SlideUserComponent', () => {
  let component: SlideUserComponent;
  let fixture: ComponentFixture<SlideUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
