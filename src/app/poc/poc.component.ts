import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss']
})
export class PocComponent implements OnInit {
  charts = [
    {
      src: 'assets/imgs/rules.png'
    },
    {
      src: 'assets/imgs/currency_exchange.png'
    },
    {
      src: 'assets/imgs/TrustedFirmware-Logo_icon-23d65367b85d00eae99cdd3377394bf463027aabb9526ce499c547a32b14b933.png'
    },
    {
      src: 'assets/imgs/kisspng-car-transport-bulldozer-tractor-agriculture-5b0c194bcc9740.785121721527519563838.png'
    },
    {
      src: 'assets/imgs/bullish.png'
    },
    {
      src: 'assets/imgs/color-icon-solo-histogram-.png'
    },
    {
      src: 'assets/imgs/statistics.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
