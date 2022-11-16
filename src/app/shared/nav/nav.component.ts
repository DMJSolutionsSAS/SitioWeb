import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @ViewChild('menu') menu!:ElementRef<HTMLElement>;
  @ViewChild('icono') icono!:ElementRef<HTMLElement>;

  Active:boolean = false;


  constructor(private renderer: Renderer2,private _ns:NavService) { }

  openCloseMenu(){  
    const res = this.menu.nativeElement.classList.contains('navbar-mobile');

    if(!res){
      this.renderer.addClass(this.menu.nativeElement, "navbar-mobile");
      this.renderer.removeClass(this.icono.nativeElement, "bi-list");
      this.renderer.addClass(this.icono.nativeElement, "bi-x");
    }else{
      this.renderer.removeClass(this.menu.nativeElement, "navbar-mobile");
      this.renderer.removeClass(this.icono.nativeElement, "bi-x");
      this.renderer.addClass(this.icono.nativeElement, "bi-list");
    }
  }

  get nav(){
    return this._ns._nav;
  }

  activar(active:boolean){
    return (active === this.Active) ? 'nav-link scrollto' : 'nav-link scrollto active';
  }

}
