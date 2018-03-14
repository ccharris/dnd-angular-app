import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DndService {

  baseApiUrl = 'http://www.dnd5eapi.co/api/';

  constructor( private _http: HttpClient ) { }

  getClasses(){
    return this._http.get(`${this.baseApiUrl}classes/`);
  }

  getClass(id: string){
    return this._http.get(`${this.baseApiUrl}classes/${id}`)
  }

  getSubClass(id: string){
    return this._http.get(`${this.baseApiUrl}subclasses/${id}`)
  }

  getRaces(){
    return this._http.get(`${this.baseApiUrl}races/`)
  }

  getRace(id: string){
    return this._http.get(`${this.baseApiUrl}races/${id}`)
  }

  getSubRace(id: string){
    return this._http.get(`${this.baseApiUrl}subraces/${id}`)
  }

  getMonsters(){
    return this._http.get(`${this.baseApiUrl}monsters/`)
  }

  getMonster(id: string){
    return this._http.get(`${this.baseApiUrl}monsters/${id}`)
  }
}
