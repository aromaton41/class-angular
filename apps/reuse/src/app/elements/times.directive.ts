import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[classAngularTimes]',
})
export class TimesDirective {

  constructor(
    private template: TemplateRef<any>,
    private viewcontainer:ViewContainerRef
  ) {}

  @Input() set render(times: number) {
    this.viewcontainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewcontainer.createEmbeddedView(this.template, {});
    }
  }
}
