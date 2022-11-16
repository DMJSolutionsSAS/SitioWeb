import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.contadorAutomatico();
  }
  
  contadorAutomatico(){
    const color : any = document.getElementById('fondo_color');
    const numero : any = document.getElementById('numero');
    
    let cantidad = 0;

    let tiempo = setInterval( () => {
        cantidad++;
        color.style.height=`${cantidad}%`;
        numero.textContent=cantidad;

        if(cantidad === 100){ clearInterval(tiempo) }
    }, 100);
  }

}
