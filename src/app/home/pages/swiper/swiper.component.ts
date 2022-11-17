import { Component } from '@angular/core';
import { HerramientaService } from '../../../services/herramienta.service';

import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styles: [
    `
      swiper {
        width: 100%;
      }

      img {
        padding: .8em;
        width: 200px !important;
        height: auto;
        overflow: hidden;
      }

      .box-img-producto > img {
        width: 100% !important;
        height: 100% !important;
      }
    `,
  ],
})
export class SwiperComponent {
  constructor(private _hs: HerramientaService) {}

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'slide',
    grabCursor: true,
    scrollbar: { draggable: true },
    navigation: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: { delay: 2000 },
  };

  get herramientas() {
    return this._hs._herramientas;
  }
}
