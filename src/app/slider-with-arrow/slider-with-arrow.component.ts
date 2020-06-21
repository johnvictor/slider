import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-with-arrow',
  templateUrl: './slider-with-arrow.component.html',
  styleUrls: ['./slider-with-arrow.component.scss']
})
export class SliderWithArrowComponent implements OnInit {
  images: any = [
    {
      img: 'assets/imgs/rules.png',
      index: 0
    },
    {
      img: 'assets/imgs/currency_exchange.png',
      index: 1
    },
    {
      img: 'assets/imgs/TrustedFirmware-Logo_icon-23d65367b85d00eae99cdd3377394bf463027aabb9526ce499c547a32b14b933.png',
      index: 2
    },
    {
      img: 'assets/imgs/kisspng-car-transport-bulldozer-tractor-agriculture-5b0c194bcc9740.785121721527519563838.png',
      index: 3
    },
    {
      img: 'assets/imgs/bullish.png',
      index: 4
    },
    {
      img: 'assets/imgs/color-icon-solo-histogram-.png',
      index: 5
    },
    {
      img: 'assets/imgs/statistics.png',
      index: 6
    }
  ];
  currentPosition = 1;
  constructor() { }

  ngOnInit(): void {
    let left = 0;
    let right = 50;
    this.images.forEach((item: any) => {
      item.style = {
        leftValue: left,
        rightValue: right,
        left: (left + 1) + '%',
        right: (right) + '%'
      };
      left+=50;  
      right-=50;    
    });
  }

  next() {
    if(this.currentPosition < this.images.length - 1) {
      this.currentPosition++;
      this.images.forEach((item: any) => {
        item.style.leftValue = item.style.leftValue - 50;
        item.style.rightValue = item.style.rightValue + 50;
        item.style.left = (item.style.leftValue + 1) + '%',
        item.style.right = item.style.rightValue + '%'
      });
    }    
  }

  previous() {
    if(this.currentPosition > 1) {
      this.currentPosition--;
      console.log(this.currentPosition);
      this.images.forEach((item: any) => {
        item.style.leftValue = item.style.leftValue + 50;
        item.style.rightValue = item.style.rightValue - 50;
        item.style.left = (item.style.leftValue + 1) + '%',
        item.style.right = item.style.rightValue + '%'
      });
    }
  }

}
