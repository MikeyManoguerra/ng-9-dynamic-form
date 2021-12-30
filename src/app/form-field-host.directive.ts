import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[formFieldHost]'

})
export class FormFieldHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

