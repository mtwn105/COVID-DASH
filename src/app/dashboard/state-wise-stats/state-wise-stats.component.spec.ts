import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWiseStatsComponent } from './state-wise-stats.component';

describe('StateWiseStatsComponent', () => {
  let component: StateWiseStatsComponent;
  let fixture: ComponentFixture<StateWiseStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateWiseStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateWiseStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
