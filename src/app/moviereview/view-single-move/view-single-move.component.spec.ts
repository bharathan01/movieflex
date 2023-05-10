import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleMoveComponent } from './view-single-move.component';

describe('ViewSingleMoveComponent', () => {
  let component: ViewSingleMoveComponent;
  let fixture: ComponentFixture<ViewSingleMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleMoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSingleMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
