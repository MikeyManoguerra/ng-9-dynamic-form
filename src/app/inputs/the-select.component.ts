import { DataField } from '../models/data-field';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'the-select',
  template: `
    <select [(ngModel)]="field.value">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
  `,
  styles: [
    'select { display:block; width:100% }'

  ]
})
export class TheSelectComponent implements OnInit {

  @Input() field: DataField;

  constructor() { }

  ngOnInit(): void { }
}
