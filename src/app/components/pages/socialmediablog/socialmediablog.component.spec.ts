import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediablogComponent } from './socialmediablog.component';

describe('SocialmediablogComponent', () => {
  let component: SocialmediablogComponent;
  let fixture: ComponentFixture<SocialmediablogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediablogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediablogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
