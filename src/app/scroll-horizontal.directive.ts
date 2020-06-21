import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollHorizontal]'
})
export class ScrollHorizontalDirective {

  transformValue = 0;

  @HostListener('click', ['$event']) onClick($event){
      console.info($event.srcElement.parentElement.nextSibling);
      console.info($event.srcElement.parentElement.previousSibling);
      // console.log(this.elementRef.nativeElement.getBoundingClientRect());
      if($event.clientX < 62) {
        switch($event.srcElement.title) {
          case 'first':
            this.renderer.setStyle(this.elementRef.nativeElement,
              'transform',
              'translateX(25px)'
            );
            break;
          case '':
            this.renderer.setStyle(this.elementRef.nativeElement,
              'transform',
              'translateX(-570px)'
            );
            break;
          case 'last':

            break;
        }
      }

      if($event.clientX > 609) {
          switch($event.srcElement.title) {
            case 'first':
  
              break;
            case '':
              this.renderer.setStyle(this.elementRef.nativeElement,
                'transform',
                'translateX(-570px)'
              );
              break;
            case 'last':
              this.renderer.setStyle(this.elementRef.nativeElement,
                'transform',
                'translateX(-1170px)'
              );
              break;
          }
        
      }

      // -468.6400146484375
      //  && $event.srcElement.title !== 'first'
      //  && $event.srcElement.title !== 'last'
      // if($event.clientX < 62
      //   && this.elementRef.nativeElement.getBoundingClientRect().left < 0) {
      //   this.transformValue += 86;

      //   if($event.srcElement.title == 'first') {
      //     this.transformValue += 4; 
      //   } else {
      //     this.transformValue -= 4; 
      //   }
      //   let value = this.transformValue + '%';

      //   this.renderer.setStyle(
      //     this.elementRef.nativeElement,
      //     'transform',
      //     'translateX('+value+')'
      //   );

      // }
      // if($event.clientX > 609 
      //   && this.elementRef.nativeElement.getBoundingClientRect().right > -400) {
      //   this.transformValue -= 86;
      //   let value = this.transformValue + '%';
      //   this.renderer.setStyle(
      //     this.elementRef.nativeElement,
      //     'transform',
      //     'translateX('+value+')'
      //   );
      // }
     
      


  }

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'transitionDuration',
      '1s'
    );
  }

}
