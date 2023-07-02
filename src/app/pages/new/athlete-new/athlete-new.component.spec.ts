import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteNewComponent } from './athlete-new.component';

describe('AthleteNewComponent', () => {
  let component: AthleteNewComponent;
  let fixture: ComponentFixture<AthleteNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
