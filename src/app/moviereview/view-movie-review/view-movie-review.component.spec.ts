import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMovieReviewComponent } from './view-movie-review.component';

describe('ViewMovieReviewComponent', () => {
  let component: ViewMovieReviewComponent;
  let fixture: ComponentFixture<ViewMovieReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMovieReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMovieReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
