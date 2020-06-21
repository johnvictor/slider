import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteSliderComponent } from './elite-slider.component';

describe('EliteSliderComponent', () => {
  let component: EliteSliderComponent;
  let fixture: ComponentFixture<EliteSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliteSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliteSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
