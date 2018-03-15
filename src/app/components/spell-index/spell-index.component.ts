import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

import { PagerService } from '../../services/page.service';
import { DndService } from '../../services/dnd.service';

@Component({
  selector: 'app-spell-index',
  templateUrl: './spell-index.component.html',
  styleUrls: ['./spell-index.component.css']
})
export class SpellIndexComponent implements OnInit {

  constructor(private _dndService: DndService, private _pagerService: PagerService) { }

  myControl: FormControl = new FormControl();

  filteredOptions: Observable<string[]>;

  // array of all items to be paged
  private allItems: any[];

  private filteredItems: any[];
  // pager object
  pager: any = {};

  // paged items
  spells: any[];

  options: string[];

  setPage(page: number) {
    // if (page < 1 || page > this.pager.totalPages) {
    //     return;
    // }
    // get pager object from service
    this.pager = this._pagerService.getPager(this.filteredItems.length, page);

    // get current page of items
    this.spells = this.filteredItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log('spell', this.spells)
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  
  filterItem(value){
    this.filteredItems = this.allItems.filter(spell => spell.name.toLowerCase().includes(value.toLowerCase()))
    console.log(this.filteredItems)
  
    this.setPage(1)
 }

  ngOnInit() {
    this._dndService.getSpells().subscribe((spellList: any[]) => {
      console.log(spellList)
      let results = spellList[0].map((spellItem, index) => {
        if(index <= 8){
          return ({
            name: spellItem.name,
            url: (Number(spellItem.url.slice(-1)) - 1) 
          })
        } else if (index <= 98){
          return ({
            name: spellItem.name,
            url: (Number(spellItem.url.slice(-2)) -1 )
          })
        } else {
          return ({
            name: spellItem.name,
            url: (Number(spellItem.url.slice(-3)) - 1) 
          })
        }
      })
      this.allItems = results;
      this.filteredItems = results;
      this.options = this.allItems.map(spell => spell.name);
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val)),
      );
      this.setPage(1)
    })
  }

}
