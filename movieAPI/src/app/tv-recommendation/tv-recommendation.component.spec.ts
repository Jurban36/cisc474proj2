import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvRecommendationComponent } from './tv-recommendation.component';

describe('TvRecommendationComponent', () => {
  let component: TvRecommendationComponent;
  let fixture: ComponentFixture<TvRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
