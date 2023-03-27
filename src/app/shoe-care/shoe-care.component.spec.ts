import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeCareComponent } from './shoe-care.component';

describe('ShoeCareComponent', () => {
  let component: ShoeCareComponent;
  let fixture: ComponentFixture<ShoeCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
