import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyGstComponent } from './tally-gst.component';

describe('TallyGstComponent', () => {
  let component: TallyGstComponent;
  let fixture: ComponentFixture<TallyGstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallyGstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TallyGstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
