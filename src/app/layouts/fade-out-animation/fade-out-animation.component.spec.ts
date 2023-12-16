import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeOutAnimationComponent } from './fade-out-animation.component';

describe('FadeOutAnimationComponent', () => {
  let component: FadeOutAnimationComponent;
  let fixture: ComponentFixture<FadeOutAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FadeOutAnimationComponent]
    });
    fixture = TestBed.createComponent(FadeOutAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
