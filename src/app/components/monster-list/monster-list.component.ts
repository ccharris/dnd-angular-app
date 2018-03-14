import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

import { MonsterList} from '../../models/MonsterList';
import { DndService } from '../../services/dnd.service';
import { PagerService } from '../../services/page.service';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {

  constructor(private _dndService: DndService, private _pagerService: PagerService) { }

  myControl: FormControl = new FormControl();

  filteredOptions: Observable<string[]>;

  // array of all items to be paged
  private allItems: any[];

  private filteredItems: any[];
  // pager object
  pager: any = {};

  // paged items
  monsters: any[];

  options: string[];

  setPage(page: number) {
    // if (page < 1 || page > this.pager.totalPages) {
    //     return;
    // }
    // get pager object from service
    this.pager = this._pagerService.getPager(this.filteredItems.length, page);

    // get current page of items
    this.monsters = this.filteredItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log('monster', this.monsters)
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  
  filterItem(value){
    this.filteredItems = this.allItems.filter(monster => monster.name.toLowerCase().includes(value.toLowerCase()))
    console.log(this.filteredItems)
  
    this.setPage(1)
 }

  ngOnInit() {
    
    this._dndService.getMonsters().subscribe((monsterList: MonsterResults) => {
      console.log(monsterList)
      
      let results = monsterList.results.map((monsterItem, index) => {
        if(index <= 8){
          return ({
            name: monsterItem.name,
            url: monsterItem.url.slice(-1) 
          })
        } else if (index <= 98){
          return ({
            name: monsterItem.name,
            url: monsterItem.url.slice(-2) 
          })
        } else {
          return ({
            name: monsterItem.name,
            url: monsterItem.url.slice(-3) 
          })
        }
        
      })
      this.allItems = results;
      this.filteredItems = results;
      this.options = this.allItems.map(monster => monster.name);
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val)),
      );
      this.setPage(1)
    })
  }
}

interface MonsterResults {
  count: number;
  results: MonsterList[];
}