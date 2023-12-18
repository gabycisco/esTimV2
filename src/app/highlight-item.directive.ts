import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightItem]'
})
export class HighlightItemDirective {

  @Input() appHighlightItem!: string;

  constructor(private el: ElementRef<HTMLImageElement>, private _renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseover() {
    this.setStyleOnMouseover();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyleOnMouseleave();
  }
  
  private setStyleOnMouseover() {
    this._renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.1)');
    this._renderer.setStyle(this.el.nativeElement, 'box-shadow', '10px 10px 5px 0px rgba(0,0,0,0.75)');
  }

  private removeStyleOnMouseleave() {
    this._renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
    this._renderer.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}
