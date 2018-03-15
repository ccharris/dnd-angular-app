import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DndService } from '../../services/dnd.service';
import { Spell } from '../../models/Spell'
@Component({
  selector: 'app-spell-details',
  templateUrl: './spell-details.component.html',
  styleUrls: ['./spell-details.component.css']
})
export class SpellDetailsComponent implements OnInit {
  spell : Spell;
  Math: any;
  constructor(private _activatedRoute: ActivatedRoute, private _dndService: DndService) { }

  ngOnInit() {
    this.Math = Math;
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._dndService.getSpell(routeData.get('id')).subscribe((singleSpell: Spell) => {
        this.spell = singleSpell;
      })
    })
  }

}
