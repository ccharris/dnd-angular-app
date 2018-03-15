import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ClassList } from '../models/Class';

@Injectable()
export class DndService {
  allClasses: Observable<any[]>;
  specificClass: Observable<Object>;
  specificSubClass: Observable<Object>;
  allRaces: Observable<Object>;
  specificRace: Observable<Object>;
  allMonsters: Observable<Object>;
  specificMonster: Observable<Object>;

  baseApiUrl = 'http://www.dnd5eapi.co/api/';

  constructor(private afd: AngularFireDatabase, private _http: HttpClient ) { }

  getClasses(): Observable<any[]> {
    return this.allClasses = this.afd.list('/0').valueChanges()
  }

  getClass(id: string): Observable<Object>{
    return this.specificClass = this.afd.object(`/0/classes/${id}`).valueChanges()
  }

  getSubClass(id: string): Observable<Object>{
    return this.specificSubClass = this.afd.object(`/5/subclasses/${id}`).valueChanges()
  }

  getRaces(){
    return this.allRaces = this.afd.list('/2').valueChanges()
  }

  getRace(id: string){
    return this.specificRace = this.afd.object(`/2/races/${id}`).valueChanges()
  }

  getSubRace(id: string){
    return this.specificRace = this.afd.object(`/4/subraces/${id}`).valueChanges()
  }

  getMonsters(){
    return this.allRaces = this.afd.list('/1').valueChanges()
  }

  getMonster(id: string){
    return this.specificRace = this.afd.object(`/1/monsters/${id}`).valueChanges()
  }
}