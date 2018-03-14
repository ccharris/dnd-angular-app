import { Component, OnInit } from '@angular/core';

import { ClassList } from '../../models/Class';
import { DndService } from '../../services/dnd.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  dataSource = []

  constructor(private _dndService: DndService) { }

  ngOnInit() {
    this._dndService.getClasses().subscribe((classList: ClassResults) => {
      let results = classList.results.map(classItem => {
        
          if(classItem.name === 'Sorceror' || 'Warlock' || 'Wizard'){
            return ({
              name: classItem.name,
              url: classItem.url.slice(-2) 
            })
          }
          else{
            return ({
              name: classItem.name,
              url: classItem.url.slice(-1) 
            })
          }
      })
      this.dataSource = results;
    })
  }

}

interface ClassResults {
  count: number;
  results: ClassList[];
}