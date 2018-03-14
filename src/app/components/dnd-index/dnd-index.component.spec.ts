import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndIndexComponent } from './dnd-index.component';

describe('DndIndexComponent', () => {
  let component: DndIndexComponent;
  let fixture: ComponentFixture<DndIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
