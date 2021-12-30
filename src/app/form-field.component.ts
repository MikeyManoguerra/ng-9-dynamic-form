import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { FormFieldHostDirective } from './form-field-host.directive';
import { FormField } from './models/form-field';

@Component({
  selector: 'form-field',
  template: `
    <div>
      <label>{{fieldItem.field.name}}</label>
      <ng-template formFieldHost></ng-template>
    </div>
  `,
  styles: [
    'div { padding-top: 20px; max-width: 500px; }',
    'label { display: block }'
  ]
})
export class FormFieldComponent implements OnInit {

  @Input() fieldItem: FormField;
  @ViewChild(FormFieldHostDirective, { static: true }) formFieldHost!: FormFieldHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  // https://v9.angular.io/guide/dynamic-component-loader
  loadComponent() {
    const viewContainerRef = this.formFieldHost.viewContainerRef;
    viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.fieldItem.component);

    const componentRef = viewContainerRef.createComponent<FormField>(componentFactory);
    componentRef.instance.field = this.fieldItem.field;
  }

  ngOnInit(): void {
    this.loadComponent();
  }
}
