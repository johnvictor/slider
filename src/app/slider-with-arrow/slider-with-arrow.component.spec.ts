import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderWithArrowComponent } from './slider-with-arrow.component';

describe('SliderWithArrowComponent', () => {
  let component: SliderWithArrowComponent;
  let fixture: ComponentFixture<SliderWithArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderWithArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderWithArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
