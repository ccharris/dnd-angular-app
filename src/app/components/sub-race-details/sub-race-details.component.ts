import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DndService } from '../../services/dnd.service';
import { Subrace } from '../../models/Subrace';

@Component({
  selector: 'app-sub-race-details',
  templateUrl: './sub-race-details.component.html',
  styleUrls: ['./sub-race-details.component.css']
})
export class SubRaceDetailsComponent implements OnInit {
  subrace: Subrace
  @Input() id: string;

  constructor(private _activatedRoute: ActivatedRoute, private _dndService: DndService) { }
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._dndService.getSubRace(this.id).subscribe((subrace: Subrace) => {
        this.subrace = subrace;
        console.log(subrace);
      })
    })
  }

}
