import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNotLoginComponent } from './about-not-login.component';

describe('AboutNotLoginComponent', () => {
  let component: AboutNotLoginComponent;
  let fixture: ComponentFixture<AboutNotLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNotLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNotLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
