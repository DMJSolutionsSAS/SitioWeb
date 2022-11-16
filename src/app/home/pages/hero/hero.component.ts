import { Component } from '@angular/core';
import { HeroService } from '../../../services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      h1{
        margin: 0;
        font-size: 56px;
        font-weight: 700;
        line-height: 64px;
        color: #fff;
        font-family: "Poppins", sans-serif;
      }
    `
  ]
})
export class HeroComponent {

  constructor(private _hs:HeroService) { }

  get heros(){
    return this._hs._hero;
  }

}
