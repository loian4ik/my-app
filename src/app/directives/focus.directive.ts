import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core'

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit{

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    //this.el.nativeElement.focus()
    //я могу по ключу nativeElement могу им управлять добавлять 
    //автоматический фокус ,  можем там и там реализовать
  }

  ngOnInit(): void {
    this.el.nativeElement.focus()
  }

}

