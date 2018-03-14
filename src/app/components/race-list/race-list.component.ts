import { Component, OnInit } from '@angular/core';

import {RaceList} from '../../models/RaceList';
import { DndService } from '../../services/dnd.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.css']
})
export class RaceListComponent implements OnInit {
  races = []

  constructor(private _dndService: DndService) { }

  ngOnInit() {
    this._dndService.getRaces().subscribe((raceList: RaceResults) => {
      console.log(raceList)
      let results = raceList.results.map(raceItem => {
        return ({
          name: raceItem.name,
          url: raceItem.url.slice(-1) 
        })
      })
      this.races = results;
    })
  }

}

interface RaceResults {
  count: number;
  results: RaceList[];
}