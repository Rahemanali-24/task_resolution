import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenResolutionComponent } from './screen-resolution.component';

describe('ScreenResolutionComponent', () => {
  let component: ScreenResolutionComponent;
  let fixture: ComponentFixture<ScreenResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenResolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
