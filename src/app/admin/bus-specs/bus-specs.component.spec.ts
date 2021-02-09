import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSpecsComponent } from './bus-specs.component';

describe('BusSpecsComponent', () => {
  let component: BusSpecsComponent;
  let fixture: ComponentFixture<BusSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
