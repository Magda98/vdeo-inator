import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2, SimpleChanges, } from "@angular/core";

@Directive({ selector: '[skeleton]' })
export class SkeletonDirective implements OnInit {
  @Input('skeletonWidth') width: string = '100%';
  @Input('skeletonHeight') height: string = '100%';
  @Input('skeletonClassName') className!: string;

  @HostBinding('class') get class() {
    return `pulse ${this.className}`
  }

  constructor(
    private el: ElementRef, private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'height', this.height)
    this.renderer.setStyle(this.el.nativeElement, 'width', this.width)
  }
}
