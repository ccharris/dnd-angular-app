import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DndService } from '../../services/dnd.service';
import { Equipment } from '../../models/Equipment'

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.css']
})
export class EquipmentDetailsComponent implements OnInit {
  equipment : Equipment;
  constructor(private _activatedRoute: ActivatedRoute, private _dndService: DndService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._dndService.getEquipment(routeData.get('id')).subscribe((singleEquipment: Equipment) => {
        console.log(singleEquipment)
        this.equipment = singleEquipment;
      })
    })
  }

}
