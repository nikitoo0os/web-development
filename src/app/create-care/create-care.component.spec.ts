import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCareComponent } from './create-care.component';

describe('CreateCareComponent', () => {
  let component: CreateCareComponent;
  let fixture: ComponentFixture<CreateCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
