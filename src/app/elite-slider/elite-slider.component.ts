import {
  Component,
  OnInit,
  Input,
  Directive,
  TemplateRef,
  ContentChildren,
  QueryList,
} from '@angular/core';

@Directive({
  selector: '[eTemplate]',
})
export class EliteSliderDirective {
  @Input('eTemplate') name;
  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.name;
  }
}

@Component({
  selector: 'app-elite-slider',
  templateUrl: './elite-slider.component.html',
  styleUrls: ['./elite-slider.component.scss'],
})
export class EliteSliderComponent implements OnInit {
  @Input() options: any;
  itemTemplate: string;
  @ContentChildren(EliteSliderDirective) templates: QueryList<any>;
  currentIndex: number = 1;

  constructor() {}

  ngOnInit() {
    let left = 0;
    let right = 50;

    this.options.forEach(option => {
      option.value = {...option};
      option.style = {
        left: (left + 1) + '%',
        right: right + '%'
      }
      option.styleValues = {
        leftValue: left,
        rightValue: right
      }

      left += 50;
      right -= 50;
    });

    console.log(this.options);
  }

  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
          case 'item':
              this.itemTemplate = item.template;
              break;

          default:
              this.itemTemplate = item.template;
              break;
      }
    });
  }

  previous() {
    console.log('called');
    if(this.currentIndex > 1) {
      this.currentIndex--;
      this.options.forEach(item => {
        item.styleValues.leftValue = item.styleValues.leftValue + 50;
        item.styleValues.rightValue = item.styleValues.rightValue - 50;
        item.style.left = (item.styleValues.leftValue + 1) + '%';
        item.style.right = item.styleValues.rightValue  + '%';
      });
    }
  }

  next() {
    console.log('called');
    if(this.currentIndex < this.options.length -1) {
      this.currentIndex++;
      this.options.forEach(item => {
        item.styleValues.leftValue = item.styleValues.leftValue - 50;
        item.styleValues.rightValue = item.styleValues.rightValue + 50;
        item.style.left = (item.styleValues.leftValue + 1) + '%';
        item.style.right = item.styleValues.rightValue  + '%';
      });
    }

  }

}
