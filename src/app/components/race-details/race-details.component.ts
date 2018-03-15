import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DndService } from '../../services/dnd.service';
import { Race } from '../../models/Race'

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {
  race : Object;
  constructor(private _activatedRoute: ActivatedRoute, private _dndService: DndService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._dndService.getRace(routeData.get('id')).subscribe((singleRace: Race) => {
          return (
            this.race = {
              name: singleRace.name,
              age: singleRace.age,
              alignment: singleRace.alignment,
              size: singleRace.size,
              size_description: singleRace.size_description,
              speed: singleRace.speed,
              languages: singleRace.languages,
              language_desc: singleRace.language_desc,
              traits: singleRace.traits || [],
              ability_bonuses: singleRace.ability_bonuses || {},
              starting_proficiencies: singleRace.starting_proficiencies || {},
              starting_proficiency_options: singleRace.starting_proficiency_options || {},
              subraces: singleRace.subraces? singleRace.subraces.map((subrace: Subrace) => {
                return(
                  {
                    name: subrace.name,
                    url: (Number(subrace.url.slice(-1)) - 1)
                  }
                )
              }) : {}
          }
        )
      })
    })
  }

}


interface Subrace {
  name: String;
  url: String;
}