import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaHelpComponent } from './corona-help.component';

describe('CoronaHelpComponent', () => {
  let component: CoronaHelpComponent;
  let fixture: ComponentFixture<CoronaHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
