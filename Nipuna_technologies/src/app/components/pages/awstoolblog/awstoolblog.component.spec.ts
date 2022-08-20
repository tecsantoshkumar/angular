import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwstoolblogComponent } from './awstoolblog.component';

describe('AwstoolblogComponent', () => {
  let component: AwstoolblogComponent;
  let fixture: ComponentFixture<AwstoolblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwstoolblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwstoolblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
