import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCNAComponent } from './ccna.component';

describe('CCNAComponent', () => {
  let component: CCNAComponent;
  let fixture: ComponentFixture<CCNAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCNAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
