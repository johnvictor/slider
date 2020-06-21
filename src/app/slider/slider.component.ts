import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  charts = [{
    src: 'assets/imgs/chart1.PNG',
    title: 'first',
    style: {}
  },
  {
    src: 'assets/imgs/chart2.PNG',
    title: 'second',
    style: {}
  },
  {
    src: 'assets/imgs/chart3.PNG',
    title: 'last',
    style: {}
  }];

  constructor() { }

  ngOnInit(): void {
  }

  animate(index) {
    switch(index) {
      case 0:
        this.charts[0].style = {
          left: '10%',
          transition: 'left 1s',
          filter: 'blur(0)'
        };
        this.charts[1].style = {
          left: '90%',
          transition: 'left 1s',
          filter: 'blur(1px)'
        };
        this.charts[2].style = {
          left: '170%',
          transition: 'left 1s',
          filter: 'blur(1px)'
        };
      break;

      case 1:
        this.charts[0].style = {
          left: '-70%',
          transition: 'left 1s',
          filter: 'blur(1px)'
          
        };
        this.charts[1].style = {
          left: '10%',
          transition: 'left 1s',
          filter: 'blur(0)'
        };
        this.charts[2].style = {
          left: '90%',
          transition: 'left 1s',
          filter: 'blur(1px)'
        };
      break;

      case 2:
        this.charts[0].style = {
          left: '-150%',
          transition: 'left 1s',
          filter: 'blur(1px)'
        };
        this.charts[1].style = {
          left: '-70%',
          transition: 'left 1s',
          filter: 'blur(1px)'
        };
        this.charts[2].style = {
          left: '10%',
          transition: 'left 1s',
          filter: 'blur(0)'
        };
      break;
    }
  }

}
