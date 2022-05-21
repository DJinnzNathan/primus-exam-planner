import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLogoComponent } from './p-logo.component';

describe('PLogoComponent', () => {
  let component: PLogoComponent;
  let fixture: ComponentFixture<PLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
