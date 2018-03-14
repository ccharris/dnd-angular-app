import { Component, OnInit } from '@angular/core';

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
 
  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  monsters: any[];

  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }

      // get pager object from service
      this.pager = this._pagerService.getPager(this.allItems.length, page);

      // get current page of items
      this.monsters = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
            url: monsterItem.url.slice(-1) 
          })
        }
        
      })
      this.allItems = results;
      this.setPage(1)
    })
  }
}

interface MonsterResults {
  count: number;
  results: MonsterList[];
}