import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamI } from '../interfaces/interfaz.interface';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  public _teams: TeamI [] = [];
 
  constructor(private http: HttpClient) { this.mostrarTeams(); }

  private mostrarTeams() {
    this.http.get<TeamI[]>('assets/data/team.json').subscribe( (res) => {
      this._teams = res;  
   });
  }

}
