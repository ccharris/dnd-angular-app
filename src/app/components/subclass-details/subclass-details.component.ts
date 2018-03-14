import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DndService } from '../../services/dnd.service';
import {Subclass } from '../../models/Subclass';

@Component({
  selector: 'app-subclass-details',
  templateUrl: './subclass-details.component.html',
  styleUrls: ['./subclass-details.component.css']
})
export class SubclassDetailsComponent implements OnInit {
  subclass: Subclass

  constructor(private _activatedRoute: ActivatedRoute, private _dndService: DndService) { }
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._dndService.getSubClass(routeData.get('id')).subscribe((subclass: Subclass) => {
        this.subclass = subclass;
        console.log(subclass);
      })
    })
  }

}
