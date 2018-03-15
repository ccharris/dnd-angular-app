import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DndService } from '../../services/dnd.service';
import { Monster } from '../../models/Monster'

@Component({
  selector: 'app-monster-details',
  templateUrl: './monster-details.component.html',
  styleUrls: ['./monster-details.component.css']
})
export class MonsterDetailsComponent implements OnInit {
  monster : Monster;
  Math: any;
  constructor(private _activatedRoute: ActivatedRoute, private _dndService: DndService) { }

  ngOnInit() {
    this.Math = Math;
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._dndService.getMonster(routeData.get('id')).subscribe((singleMonster: Monster) => {
        this.monster = singleMonster;
      })
    })
  }
}
