import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  nav: any[]=[];
  @ViewChild('menu') menu!:ElementRef<HTMLElement>;
  @ViewChild('icono') icono!:ElementRef<HTMLElement>;

  Active:boolean = false;

  constructor(private renderer: Renderer2) { }
ngOnInit(){
  this.nav = [
    {href: '#', active: false, menu: 'home' }
  ]
}
  openCloseMenu(){  
    const res = this.menu.nativeElement.classList.contains('navbar-mobile');

    if(!res){
      this.renderer.addClass(this.menu.nativeElement, "navbar-mobile");
      this.renderer.removeClass(this.icono.nativeElement, "fa-solid fa-xmark");
      this.renderer.addClass(this.icono.nativeElement, "bi-x");
    }else{
      this.renderer.removeClass(this.menu.nativeElement, "navbar-mobile");
      this.renderer.removeClass(this.icono.nativeElement, "fa-solid fa-xmark");
      this.renderer.addClass(this.icono.nativeElement, "fa-solid fa-bars");
    }
  }

  activar(active:boolean){
    //return (active === this.Active) ? 'nav-link scrollto' : 'nav-link scrollto active';
  }
}
