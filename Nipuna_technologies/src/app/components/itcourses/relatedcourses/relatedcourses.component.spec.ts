import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedcoursesComponent } from './relatedcourses.component';

describe('RelatedcoursesComponent', () => {
  let component: RelatedcoursesComponent;
  let fixture: ComponentFixture<RelatedcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
