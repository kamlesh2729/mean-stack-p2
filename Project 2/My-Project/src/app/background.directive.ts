import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  @Input() correctAnswer:boolean = false;

  constructor( public elRf: ElementRef, public renderer: Renderer2) { }

  @HostListener('click') onAnswered(){
    if( this.correctAnswer)
    this.renderer.setStyle(this.elRf.nativeElement, 'background-color','green');
    else
    this.renderer.setStyle(this.elRf.nativeElement, 'background-color','red');
  }

}
