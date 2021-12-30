import { Component, Input, OnInit } from '@angular/core';
import { DataField } from '../models/data-field';

@Component({
  selector: 'the-input',
  template: `
    <input [(ngModel)]="field.value" type="text">
  `,
  styles: [
    'input { display:block; width:100% }'
  ]
})
export class TheInputComponent implements OnInit {

  @Input() field: DataField;

  constructor() { }

  ngOnInit(): void { }
}
