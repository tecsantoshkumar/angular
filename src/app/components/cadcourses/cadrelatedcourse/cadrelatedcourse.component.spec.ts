import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadrelatedcourseComponent } from './cadrelatedcourse.component';

describe('CadrelatedcourseComponent', () => {
  let component: CadrelatedcourseComponent;
  let fixture: ComponentFixture<CadrelatedcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadrelatedcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadrelatedcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
