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
    this._dndService.getRaces().subscribe((raceList: any[]) => {
      let results = raceList[0].map(raceItem => {
        return ({
          name: raceItem.name,
          url: (Number(raceItem.url.slice(-1)) - 1)
        })
      })
      this.races = results;
    })
  }

}
