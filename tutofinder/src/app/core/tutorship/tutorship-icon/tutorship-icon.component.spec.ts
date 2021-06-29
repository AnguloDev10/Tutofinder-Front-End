import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorshipIconComponent } from './tutorship-icon.component';

describe('TutorshipIconComponent', () => {
  let component: TutorshipIconComponent;
  let fixture: ComponentFixture<TutorshipIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorshipIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorshipIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
