import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // @Input('appBetterHighlight') defaultColor: string = 'transparent';
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'tomato';
  @HostBinding('style.backgroundColor') bgrndColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.bgrndColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.bgrndColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.bgrndColor = this.defaultColor;

  }
}
