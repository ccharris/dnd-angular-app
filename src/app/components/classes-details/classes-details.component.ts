import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DndService } from '../../services/dnd.service';
import { Class } from '../../models/IndividualClass'

@Component({
  selector: 'app-classes-details',
  templateUrl: './classes-details.component.html',
  styleUrls: ['./classes-details.component.css']
})
export class ClassesDetailsComponent implements OnInit {
  class: Object;

  constructor(private _activatedRoute: ActivatedRoute, private _dndService: DndService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._dndService.getClass(routeData.get('id')).subscribe((singleClass: Class) => {
        console.log(singleClass)
        if(singleClass.name === 'Sorceror' || 'Warlock' || 'Wizard'){
          return (
            this.class = {
            name: singleClass.name,
            hit_die: singleClass.hit_die,
            subclasses: singleClass.subclasses.map((subclass: Subclass) => {
              return(
                {
                  name: subclass.name,
                  url: subclass.url.slice(-2)
                }
              )
              
            }),
            proficiencies: singleClass.proficiencies,
            proficiency_choices: singleClass.proficiency_choices,
            saving_throws: singleClass.saving_throws, 
          })
        }
        else{
          return (
            this.class = {
            name: singleClass.name,
            hit_die: singleClass.hit_die,
            subclasses: singleClass.subclasses.map((subclass: Subclass) => {
              return(
                {
                  name: subclass.name,
                  url: subclass.url.slice(-1)
                }
              )
            }),
            proficiencies: singleClass.proficiencies,
            proficiency_choices: singleClass.proficiency_choices,
            saving_throws: singleClass.saving_throws,  
          })
        }
      })
    })
  }

}

interface Subclass {
  name: String;
  url: String;
}
