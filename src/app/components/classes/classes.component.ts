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
    let classList = this._dndService.getClasses().subscribe((classList) => {
      let results = classList[0].map(classItem => {  
          if(classItem.name === 'Sorcerer' || classItem.name === 'Warlock' || classItem.name === 'Wizard'){
            return ({
              name: classItem.name,
              url: (Number(classItem.url.slice(-2)) - 1) 
            })
          }
          else{
            return ({
              name: classItem.name,
              url: (Number(classItem.url.slice(-1)) - 1) 
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