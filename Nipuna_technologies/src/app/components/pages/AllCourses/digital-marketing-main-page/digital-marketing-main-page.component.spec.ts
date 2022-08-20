import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingMainPageComponent } from './digital-marketing-main-page.component';

describe('DigitalMarketingMainPageComponent', () => {
  let component: DigitalMarketingMainPageComponent;
  let fixture: ComponentFixture<DigitalMarketingMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalMarketingMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMarketingMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
