import { Component, Input, OnInit } from '@angular/core';
import { DataField } from '../models/data-field';

@Component({
  selector: 'the-text-area',
  template: `
    <textarea [(ngModel)]="field.value" rows="5"></textarea>
  `,
  styles: [
    'textarea { display:block; width:100% }'
  ]
})
export class TheTextAreaComponent implements OnInit {

  @Input() field: DataField;

  constructor() { }

  ngOnInit(): void { }
}
