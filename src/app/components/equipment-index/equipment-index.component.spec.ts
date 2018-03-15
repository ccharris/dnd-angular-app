import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentIndexComponent } from './equipment-index.component';

describe('EquipmentIndexComponent', () => {
  let component: EquipmentIndexComponent;
  let fixture: ComponentFixture<EquipmentIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
