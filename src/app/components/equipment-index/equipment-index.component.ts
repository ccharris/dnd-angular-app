import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

import { PagerService } from '../../services/page.service';
import { DndService } from '../../services/dnd.service';

@Component({
  selector: 'app-equipment-index',
  templateUrl: './equipment-index.component.html',
  styleUrls: ['./equipment-index.component.css']
})
export class EquipmentIndexComponent implements OnInit {

  constructor(private _dndService: DndService, private _pagerService: PagerService) { }

  myControl: FormControl = new FormControl();

  filteredOptions: Observable<string[]>;

  // array of all items to be paged
  private allItems: any[];

  private filteredItems: any[];
  // pager object
  pager: any = {};

  // paged items
  equipment: any[];

  options: string[];

  setPage(page: number) {
    // if (page < 1 || page > this.pager.totalPages) {
    //     return;
    // }
    // get pager object from service
    this.pager = this._pagerService.getPager(this.filteredItems.length, page);

    // get current page of items
    this.equipment = this.filteredItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  
  filterItem(value){
    this.filteredItems = this.allItems.filter(equipment => equipment.name.toLowerCase().includes(value.toLowerCase())) 
    this.setPage(1)
 }

  ngOnInit() {
    this._dndService.getEquipmentList().subscribe((equipmentList: any[]) => {
      let results = equipmentList[0].map((equipmentItem, index) => {
        if(index <= 8){
          return ({
            name: equipmentItem.name,
            category_range: equipmentItem.category_range,
            url: (Number(equipmentItem.url.slice(-1)) - 1) 
          })
        } else if (index <= 98){
          return ({
            name: equipmentItem.name,
            category_range: equipmentItem.category_range,
            url: (Number(equipmentItem.url.slice(-2)) -1 )
          })
        } else {
          return ({
            name: equipmentItem.name,
            category_range: equipmentItem.category_range,
            url: (Number(equipmentItem.url.slice(-3)) - 1) 
          })
        }
      })
      this.allItems = results;
      this.filteredItems = results;
      this.options = this.allItems.map(equipment => equipment.name);
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val)),
      );
      this.setPage(1)
    })
  }


}
