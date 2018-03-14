import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRaceDetailsComponent } from './sub-race-details.component';

describe('SubRaceDetailsComponent', () => {
  let component: SubRaceDetailsComponent;
  let fixture: ComponentFixture<SubRaceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRaceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
