import { Component } from '@angular/core';
import { TeamsService } from '../../../services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  constructor(private _ts: TeamsService) {  }
    
  get teams(){
    return this._ts._teams;
  }
}
