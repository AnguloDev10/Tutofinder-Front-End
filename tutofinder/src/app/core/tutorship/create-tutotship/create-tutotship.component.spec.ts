import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTutotshipComponent } from './create-tutotship.component';

describe('CreateTutotshipComponent', () => {
  let component: CreateTutotshipComponent;
  let fixture: ComponentFixture<CreateTutotshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTutotshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTutotshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
