import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCatagoryComponent } from './movie-catagory.component';

describe('MovieCatagoryComponent', () => {
  let component: MovieCatagoryComponent;
  let fixture: ComponentFixture<MovieCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
