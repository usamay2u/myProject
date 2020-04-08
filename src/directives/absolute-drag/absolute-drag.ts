import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { DomController } from 'ionic-angular';

@Directive({
  selector: '[absolute-drag]'
})
export class AbsoluteDrag {

    @Input('startLeft') startLeft: any;
    @Input('startTop') startTop: any;
    previousXval;
    previousYval;

    constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController) {

    }

    ngAfterViewInit() {
        this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');

        let hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });

        hammer.on('pan', (ev) => {
          this.handlePan(ev);
        });
    }

    handlePan(ev){
       // let newLeft = ev.center.x - ev.target.parentElement.getBoundingClientRect().left;
       // let newTop = ev.center.y - ev.target.parentElement.getBoundingClientRect().top;
       if(ev.center.x != 0)
          this.previousXval = ev.center.x
       if(ev.center.y != 0)
          this.previousYval = ev.center.y

        // let newLeft = this.previousXval;
        // let newTop = this.previousYval;

        let newLeft = this.previousXval - 21;
        let newTop = this.previousYval - 26;

        this.domCtrl.write(() => {
            this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft + 'px');
            this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
        });
    }


}
