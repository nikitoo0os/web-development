import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseNewComponent } from './exercise-new.component';

describe('ExerciseNewComponent', () => {
  let component: ExerciseNewComponent;
  let fixture: ComponentFixture<ExerciseNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
