# instalacion de la pagina web DMJ SOLUTIONS SAS V2  

## versiones 
Angular CLI: 14.2.9
Node: 16.17.0
Package Manager: npm 8.15.0

1.- npm i  //installacion de los node_module
2.- npm install --save ngx-useful-swiper@latest swiper  
3.- conf de swiper angular.json  poner los style de swwiper

"styles": [
    "src/styles.css",
    "./node_modules/swiper/swiper-bundle.css"
],
4.- importa el modulo de swiper en homeModule

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

imports: [
    ...
	NgxUsefulSwiperModule
    ...
],

