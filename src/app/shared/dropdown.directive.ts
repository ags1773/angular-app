import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  toggle: boolean = false;

  constructor(private renderer: Renderer2, private input: ElementRef) { }

  @HostListener('click') toggleOpen(){
    this.toggle = !this.toggle;
    if(this.toggle){
      this.renderer.addClass(this.input.nativeElement, 'show');
    } else{
      this.renderer.removeClass(this.input.nativeElement, 'show');
    }
  }

}
