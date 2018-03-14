import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubclassDetailsComponent } from './subclass-details.component';

describe('SubclassDetailsComponent', () => {
  let component: SubclassDetailsComponent;
  let fixture: ComponentFixture<SubclassDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubclassDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubclassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
